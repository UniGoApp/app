import React, { useState, useContext, useEffect } from 'react';
import {Text, View, Modal, Switch, ScrollView, Image, TouchableHighlight, Alert, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';

import axios from 'axios';
import Logo from '../components/Logo';
import SvgElement from '../components/SvgElement';
import { AuthContext } from '../context/auth';
import theme from '../config/theme';
import SubmitButton from '../components/SubmitButton';
import FooterTabs from '../components/FooterTabs';
import SafeScreen from '../config/SafeArea';

const LINKS = [
    {
        id: 1,
        screen_id: 'Ajustes',
        title: 'Editar perfil',
        icon: 'person',
        descr: 'Modificar datos del usuario.'
    },
    {
        id: 2,
        screen_id: 'modal',
        title: 'Preferencias',
        icon: 'settings',
        descr: 'Preferencias sobre notificaciones y boletines.'
    },
    {
        id: 3,
        screen_id: 'Sugerencias',
        title: 'Buzón de sugerencias',
        icon: 'mail',
        descr: 'Envíe sus comentarios o críticas para tenerlas en cuenta y mejorar la aplicacion y ofrecer un mejor servicio.'
    },
    {
        id: 4,
        screen_id: 'Legal',
        title: 'Información Legal',
        icon: 'legal',
        descr: ''
    },
    {
        id: 5,
        screen_id: 'Soporte',
        title: 'Soporte y asistencia',
        icon: 'help',
        descr: 'Contacta con nosotros y te ayudaremos con cualquier incidencia o duda.'
    },
    {
        id: 6,
        screen_id: 'modal',
        title: 'Eliminar cuenta',
        icon: 'delete',
        descr: '¡Accion irreversible!'
    }
];

export default function Account({navigation}){

    const [state, setState] = useContext(AuthContext);

    const [username, setUserame] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [creationTime, setCreationTime] = useState('');
    
    const [uploadImage, setUploadImage] = useState('');

    //MODAL
    const [modalVisible, setModalVisible] = useState(false);
    //MODAL SWITCH FOR PUSH
    const [switchPUSHEnabled, setSwitchPUSHEnabled] = useState(false);
    const toggleSwitchPUSH = () => setSwitchPUSHEnabled(!switchPUSHEnabled);
    //MODAL SWITCH FOR EMAILS
    const [switchEMAILEnabled, setSwitchEMAILEnabled] = useState(false);
    const toggleSwitchEMAIL = () => setSwitchEMAILEnabled(!switchEMAILEnabled);

    const Item = ({props}) => (
        <TouchableHighlight underlayColor='#ffffff00' style={props.icon === 'delete' ? styles.itemCaution : styles.item} onPress={() => {
            if(props.screen_id != 'modal'){
                navigation.navigate(props.screen_id);
            }else{
                if(props.id === 2){
                    setModalVisible(true);
                }else if(props.icon === 'delete'){
                    Alert.alert(
                        "¿Está seguro?",
                        "¡Está a punto de eliminar su cuenta! Esta accion es irreversible...",
                        [
                          {
                            text: "Cancelar",
                            style: "default"
                          },
                          { text: "Eliminar",
                            style: "destructive",
                            onPress: async () => {
                                console.log("OK!");
                                
                                const {data} = await axios.delete(`/usuarios/${state.user.id}`);
                                await SecureStore.deleteItemAsync('authToken');
                                //update Context
                                setState({...state, user: null, token: ""});
                                navigation.navigate("SignIn");

                            }
                         }
                        ],
                        {
                          cancelable: true,
                          onDismiss: () => Alert.alert("Nos has hecho sudar... hehe")
                        }
                    );
                }
            }
        }}>
            <>
            <SvgElement name={props.icon} type={props.icon === 'delete' ? 'caution' : null} style={{flex: 2, margin:0, padding: 0}}/>
            <View style={{flex: 8}}>
                <Text style={props.icon === 'delete' ? styles.titleCaution : styles.title}>{props.title}</Text>
                {props.descr ? <Text style={styles.descr}>{props.descr}</Text> : <></>}
            </View>
            </>
        </TouchableHighlight>
    );

    useEffect(() => {
        if(state) {
            const {username, email, phone, picture, creation_time, rrss} = state.user;
            setUserame(username);
            setEmail(email);
            setPhone(phone);
            setImage(picture);
            let date = new String(creation_time.substring(0, 10));
            setCreationTime(date);
            if(rrss === 'ACTIVE'){
                setSwitchEMAILEnabled(true);
            }
        }
    }, [state]);

    const handleUpload = async () => {
        //ask for permission
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!permissionResult.granted){
            Alert.alert(
                "Se necesitan permisos...",
                "Para conceder permisos vaya a Ajustes > Aplicaciones > Unicar > Permisos y conceda permisos para Archivos y contenido multimedia",
                [
                  {
                    text: "OK",
                    style: "default"
                  }
                ]
            );
            return;
        }
        //get image from library
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.2,
            base64: true
        });

        if(pickerResult.cancelled){
            return;
        }
        //update state
        let base64Image = `data:image/jpg;base64,${pickerResult.base64}`;
        setUploadImage(base64Image);

        //Upload to backend
        const {data} = await axios.post('/upload-image', {
            image: base64Image
        });
        setUploadImage(data.data);
        //update  expo-secure-storage
        const as = JSON.parse(await SecureStore.getItemAsync('authToken'));
        as.user.picture = data.data;
        await SecureStore.setItemAsync('authToken', JSON.stringify(as));
        //update Context
        setState({...state, user: as.user});
        setImage(data.data);

        Alert.alert(
            "Abrir la galería",
            "Debe conceder permisos para modificar su foto de perfil.",
            [
              {
                text: "Rechazar",
                style: "cancel"
              },
              { text: "Conceder",
                onPress: async () => {
                    //
                }
             }
            ]
        );
    };
    
    const handleSubmitPreferencias = async () => {
        if((state.user.rrss === 'ACTIVE' && !switchEMAILEnabled) || (state.user.rrss === 'INACTIVE' && switchEMAILEnabled)){
            if(!switchEMAILEnabled){
                //change to INACTIVE
                const {data} = await axios.put(`/rrss/${state.user.id}`, {
                    value: 'INACTIVE'
                });
                //update  expo-secure-storage
                const as = JSON.parse(await SecureStore.getItemAsync('authToken'));
                as.user.rrss = data.data;
                await SecureStore.setItemAsync('authToken', JSON.stringify(as));
                //update Context
                setState({...state, user: as.user});
                setSwitchEMAILEnabled(false);
            }else{
                //change to ACTIVE
                const {data} = await axios.put(`/rrss/${state.user.id}`, {
                    value: 'ACTIVE'
                });
                //update  expo-secure-storage
                const as = JSON.parse(await SecureStore.getItemAsync('authToken'));
                as.user.rrss = data.data;
                await SecureStore.setItemAsync('authToken', JSON.stringify(as));
                //update Context
                setState({...state, user: as.user});
                setSwitchEMAILEnabled(true);
            }
            
        }
    };

    return(
        <SafeScreen>
            <ScrollView>
                <View style={{flex: 1, justifyContent: 'flex-end', padding: 10}}>
                    <Logo>
                        {image ? (
                            <Image source={{uri: image}} style={{width: 190, height: 190, borderRadius: 100, marginVertical: 20}}/>
                        ) : uploadImage ? (
                            <Image source={{uri: uploadImage}} style={{width: 190, height: 190, borderRadius: 100, marginVertical: 20}}/>
                        ) : (
                            <TouchableHighlight underlayColor='#ffffff00' style={{height: 180}} onPress={() => handleUpload()}>
                                <SvgElement name="camera" size="36" color={theme.color.verde} />
                            </TouchableHighlight>
                        )}
                        { image ? (
                        <TouchableHighlight style={{position: 'absolute'}} underlayColor='#ffffff00' onPress={() => handleUpload()}>
                            <SvgElement name="camera" size="36" color="black" style={{
                                marginTop: -5, marginBottom: 10, alignSelf: 'center'
                            }}/>
                        </TouchableHighlight>
                    ) : (<></>)}
                    </Logo>

                    <Text style={styles.titular}>Datos personales</Text>
                    <View style={styles.userCard}>
                        <Text>{username}</Text>
                        <Text>Email: {email}</Text>
                        <Text>Número de teléfono: {phone}</Text>
                        <Text>Miembro desde: {creationTime}</Text>
                    </View>
                </View>
                {
                    LINKS.map((item) => <Item key={item.id} props={item} />)
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    presentationStyle="overFullScreen"
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    onOrientationChange={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.column}>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Notificaciones Push</Text>
                                    <Switch
                                        trackColor="#767577"
                                        thumbColor={switchPUSHEnabled ? theme.color.verde : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitchPUSH}
                                        value={switchPUSHEnabled}
                                    />
                                </View>
                                <Text style={[theme.size.subtitle, {paddingBottom: 15}]}>Activalo para recibir notificaciones y actualziaciones de tus viajes publicados o inscritos.</Text>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Suscripción a boletines</Text>
                                    <Switch
                                        trackColor="#767577"
                                        thumbColor={switchEMAILEnabled ? theme.color.verde : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitchEMAIL}
                                        value={switchEMAILEnabled}
                                    />
                                </View>
                                <Text style={[theme.size.subtitle, {paddingBottom: 15}]}>Recibe todas las notificaciones sobre actualizaciones y novedades de la aplicación.</Text>
                            </View>
                            {/* //Terminar de ver en SignIn */}
                            <SubmitButton title="Guardar preferencias" handleSubmit={() => {
                                // Con un await hago que el boton se quede cargando hasta que se actualicen los datos en la bbdd
                                handleSubmitPreferencias();
                                setModalVisible(!modalVisible);
                            }} />
                        </View>
                    </View>
                </Modal>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <FooterTabs />
                </View>
            </ScrollView>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <FooterTabs />
            </View>
        </SafeScreen>
        
    );
}

const styles = StyleSheet.create({
    titular: {
        marginTop: 6,
        fontSize: theme.size.title
    },
    userCard:{
        marginBottom: 12,
        marginTop: 6,
        backgroundColor: theme.color.verde,
        borderRadius: 6,
        padding: 12
    },
    item: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.color.light,
        paddingVertical: 10,
        paddingHorizontal: 0,
        borderTopWidth: 1,
        borderColor: theme.color.grey,
    },
    itemCaution: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.background.caution,
        paddingVertical: 10,
        paddingHorizontal: 0,
        borderTopWidth: 1,
        borderColor: theme.color.grey,
    },
    title: {
        fontSize: theme.size.title
    },
    titleCaution: {
        fontSize: theme.size.title,
        color: theme.color.caution
    },
    descr: {
        fontSize: theme.size.subtitle,
        fontWeight: theme.weight.light
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        marginBottom: 0,
        flex: 0.35,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    column: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    row:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: theme.size.title,
    }
});