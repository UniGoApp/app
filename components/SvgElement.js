import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import theme from '../config/theme';

const icons = {
    // Login and signup
    text: <Path d="M12 11.7q-1.45 0-2.475-1.038Q8.5 9.625 8.5 8.2q0-1.45 1.025-2.475Q10.55 4.7 12 4.7q1.45 0 2.475 1.025Q15.5 6.75 15.5 8.2q0 1.425-1.025 2.462Q13.45 11.7 12 11.7Zm-7.5 7.6v-2.225q0-.725.4-1.35.4-.625 1.075-.975 1.475-.725 2.988-1.088Q10.475 13.3 12 13.3t3.038.362q1.512.363 2.987 1.088.675.35 1.075.975.4.625.4 1.35V19.3ZM6 17.8h12v-.725q0-.3-.175-.55-.175-.25-.475-.425-1.3-.625-2.637-.963Q13.375 14.8 12 14.8t-2.713.337q-1.337.338-2.637.963-.3.175-.475.425t-.175.55Zm6-7.6q.825 0 1.413-.588Q14 9.025 14 8.2t-.587-1.413Q12.825 6.2 12 6.2q-.825 0-1.412.587Q10 7.375 10 8.2q0 .825.588 1.412.587.588 1.412.588Zm0-2Zm0 9.6Z"/>,
    email: <Path d="M4.3 19.5q-.75 0-1.275-.525Q2.5 18.45 2.5 17.7V6.3q0-.75.525-1.275Q3.55 4.5 4.3 4.5h15.4q.75 0 1.275.525.525.525.525 1.275v11.4q0 .75-.525 1.275-.525.525-1.275.525Zm7.7-6.95-8-5.1V17.7q0 .125.088.213.087.087.212.087h15.4q.125 0 .213-.087.087-.088.087-.213V7.45ZM12 11l7.85-5H4.15ZM4 7.45V6v11.7q0 .125.088.213.087.087.212.087H4v-.3Z"/>,
    tel: <Path d="M19.425 20.45q-2.9 0-5.762-1.388-2.863-1.387-5.113-3.637-2.25-2.25-3.637-5.1-1.388-2.85-1.388-5.775 0-.45.3-.75t.75-.3h3.25q.4 0 .687.237.288.238.363.613L9.45 7.3q.05.375-.025.675-.075.3-.325.525l-2.3 2.25q1.2 2 2.837 3.625Q11.275 16 13.35 17.2l2.225-2.25q.25-.25.588-.35.337-.1.687-.05l2.775.575q.375.075.613.35.237.275.237.675v3.25q0 .45-.3.75t-.75.3ZM6.1 9.325l1.775-1.7q.05-.05.063-.113.012-.062-.013-.112L7.5 5.15q-.025-.075-.075-.113Q7.375 5 7.3 5H5.175q-.075 0-.113.037-.037.038-.037.088.075 1.025.338 2.087.262 1.063.737 2.113Zm8.65 8.575q1 .475 2.075.725 1.075.25 2.025.275.05 0 .088-.038.037-.037.037-.087v-2.1q0-.075-.037-.125-.038-.05-.113-.075l-2.1-.425q-.05-.025-.1 0l-.1.05ZM6.1 9.325Zm8.65 8.575Z"/>,
    password: <Path d="M12 15.575q1.7 0 2.887-1.188 1.188-1.187 1.188-2.887t-1.188-2.887Q13.7 7.425 12 7.425T9.113 8.613Q7.925 9.8 7.925 11.5t1.188 2.887Q10.3 15.575 12 15.575Zm0-1.375q-1.125 0-1.912-.788Q9.3 12.625 9.3 11.5t.788-1.913Q10.875 8.8 12 8.8t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm0 4.3q-3.45 0-6.287-1.9-2.838-1.9-4.163-5.1 1.325-3.2 4.163-5.1Q8.55 4.5 12 4.5q3.45 0 6.288 1.9 2.837 1.9 4.162 5.1-1.325 3.2-4.162 5.1Q15.45 18.5 12 18.5Zm0-7Zm0 5.5q2.825 0 5.188-1.488Q19.55 14.025 20.8 11.5q-1.25-2.525-3.612-4.013Q14.825 6 12 6 9.175 6 6.812 7.487 4.45 8.975 3.2 11.5q1.25 2.525 3.612 4.012Q9.175 17 12 17Z"/>,
    passwordOff: <Path d="M15.775 12.975 14.65 11.85q.225-1.25-.712-2.237Q13 8.625 11.65 8.85l-1.125-1.125q.35-.15.7-.225.35-.075.775-.075 1.7 0 2.887 1.188Q16.075 9.8 16.075 11.5q0 .425-.075.787-.075.363-.225.688Zm3.175 3.1-1.1-1.025q.95-.725 1.688-1.588.737-.862 1.262-1.962-1.25-2.525-3.588-4.013Q14.875 6 12 6q-.725 0-1.425.1-.7.1-1.375.3L8.025 5.225q.95-.375 1.938-.55Q10.95 4.5 12 4.5q3.525 0 6.35 1.938 2.825 1.937 4.1 5.062-.55 1.35-1.425 2.512-.875 1.163-2.075 2.063Zm.8 5.8-4.025-4.025q-.775.3-1.712.475-.938.175-2.013.175-3.525 0-6.338-1.938Q2.85 14.625 1.55 11.5q.55-1.325 1.425-2.475Q3.85 7.875 4.9 7.05l-2.775-2.8 1.05-1.075 17.65 17.65ZM5.95 8.1q-.8.625-1.537 1.513Q3.675 10.5 3.2 11.5q1.25 2.525 3.587 4.012Q9.125 17 12 17q.675 0 1.35-.113.675-.112 1.15-.237l-1.25-1.3q-.275.1-.6.162-.325.063-.65.063-1.7 0-2.887-1.188Q7.925 13.2 7.925 11.5q0-.3.063-.638.062-.337.162-.612Zm7.575 2.625Zm-3.3 1.65Z"/>,
    //Footer tabs
    home: <Path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7Z"/>,
    search: <Path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/>,
    add: <Path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4Zm1 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>,
    reservas: <Path d="M5 21V5q0-.825.588-1.413Q6.175 3 7 3h10q.825 0 1.413.587Q19 4.175 19 5v16l-7-3Z"/>,
    person: <Path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm-8 8v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2V20Z"/>,
    // in-app icons
    menu: <Path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"/>,
    bell: <Path d="M4 19v-2h2v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h2v2Zm8 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Z"/>,
    settings: <Path d="M11 21v-6h2v2h8v2h-8v2Zm-8-2v-2h6v2Zm4-4v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2ZM3 7V5h10v2Z"/>,
    close: <Path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/>,
    exit: <Path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h7v2Zm11-4-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5Z"/>,
    
    edit: <Path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z"/>,
    delete: <Path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/>,
    calendar: <Path d="M12 14q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-4 0q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm8 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14Zm-4 4q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm-4 0q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm8 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"/>,
    car: <Path d="M6 19v1q0 .425-.287.712Q5.425 21 5 21H4q-.425 0-.712-.288Q3 20.425 3 20v-8l2.1-6q.15-.45.538-.725Q6.025 5 6.5 5h11q.475 0 .863.275.387.275.537.725l2.1 6v8q0 .425-.288.712Q20.425 21 20 21h-1q-.425 0-.712-.288Q18 20.425 18 20v-1Zm-.2-9h12.4l-1.05-3H6.85Zm1.7 6q.625 0 1.062-.438Q9 15.125 9 14.5t-.438-1.062Q8.125 13 7.5 13t-1.062.438Q6 13.875 6 14.5t.438 1.062Q6.875 16 7.5 16Zm9 0q.625 0 1.062-.438Q18 15.125 18 14.5t-.438-1.062Q17.125 13 16.5 13t-1.062.438Q15 13.875 15 14.5t.438 1.062Q15.875 16 16.5 16Z"/>,
    
    star: <Path d="m8.85 17.825 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425ZM5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275ZM12 13.25Z"/>,
    starFill: <Path d="m5.825 22 1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625 7.2.625-5.45 4.725L18.175 22 12 18.275Z"/>,
    success: <Path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2q1.625 0 3.075.475 1.45.475 2.675 1.325L16.3 5.275q-.95-.6-2.025-.938Q13.2 4 12 4 8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-.45-.05-.9t-.15-.875L21.425 8.6q.275.8.425 1.65.15.85.15 1.75 0 2.075-.788 3.9-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-1.4-5.4-4.25-4.25 1.4-1.4 2.85 2.85 10-10.025 1.4 1.4Z"/>,
    ticket: <Path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v4q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16v-2.55q-.925-.55-1.462-1.462Q18 13.075 18 12t.538-1.988Q19.075 9.1 20 8.55V6H4v2.55q.925.55 1.463 1.462Q6 10.925 6 12t-.537 1.988Q4.925 14.9 4 15.45Zm8-1q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0-4q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm0-4q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 3Z"/>,
    tciketFill: <Path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v4q0 .825-.587 1.413Q20.825 20 20 20Zm8-3q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0-4q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm0-4q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Z"/>,
    camera: <Path d="M12 17.5q1.875 0 3.188-1.312Q16.5 14.875 16.5 13q0-1.875-1.312-3.188Q13.875 8.5 12 8.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L9 3h6l1.85 2H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Z"/>,
    mail: <Path d="m19 21-1.4-1.4 1.575-1.6H15v-2h4.175L17.6 14.4 19 13l4 4ZM4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h13q.825 0 1.413.588Q19 6.175 19 7v4h-2V8.4L10.4 13 4 8.425V17h9v2ZM5.45 7l4.95 3.55L15.5 7Z"/>,
    legal: <Path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0 5.9q1.025-.275 2.038-1.013 1.012-.737 1.762-1.637l-1.8-1.8q-.45.275-.962.413Q12.525 16 12 16q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 .55-.137 1.062-.138.513-.413.988l1.5 1.5q.5-1.025.775-2.15T18 11.1V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0 2.1q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm.2-10Z"/>,
    help: <Path d="M11.95 18q.525 0 .888-.363.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.888.363q-.362.362-.362.887t.362.887q.363.363.888.363Zm-.9-3.85h1.85q0-.825.188-1.3.187-.475 1.062-1.3.65-.65 1.025-1.238.375-.587.375-1.412 0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75-.888.75-1.238 1.8l1.65.65q.125-.45.563-.975Q11.2 7.7 12.1 7.7q.8 0 1.2.437.4.438.4.963 0 .5-.3.937-.3.438-.75.813-1.1.975-1.35 1.475-.25.5-.25 1.825ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>,
    right: <Path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"/>,
    clock: <Path d="m15.3 16.7 1.4-1.4-3.7-3.7V7h-2v5.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>,
    rightLong: <Path d="m17.5 16.5-1.425-1.4 2.1-2.1H3v-2h15.175L16.1 8.9l1.425-1.4L22 12Z"/>,
    wallet: <Path d="M16 13.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425ZM5 19V5v14Zm0 2q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v2.5h-2V5H5v14h14v-2.5h2V19q0 .825-.587 1.413Q19.825 21 19 21Zm8-4q-.825 0-1.412-.587Q11 15.825 11 15V9q0-.825.588-1.413Q12.175 7 13 7h7q.825 0 1.413.587Q22 8.175 22 9v6q0 .825-.587 1.413Q20.825 17 20 17Zm7-2V9h-7v6Z"/>,
    flag: <Path d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Zm7.5-11Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z"/>,
    location: <Path d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 7.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Zm0-11.8Z"/>,
    locationCustom: <><Path d="M 10.90625 0.0703125 C 9.609375 0.253906 8.34375 0.734375 7.269531 1.453125 C 6.476562 1.984375 6.328125 2.207031 6.585938 2.460938 C 6.757812 2.640625 6.886719 2.605469 7.339844 2.269531 C 11.320312 -0.664062 16.882812 0.695312 19.058594 5.132812 C 19.570312 6.179688 19.777344 7.039062 19.8125 8.273438 C 19.84375 9.214844 19.800781 9.683594 19.609375 10.46875 L 19.484375 10.972656 L 19.578125 11.101562 C 19.683594 11.242188 19.902344 11.289062 20.058594 11.203125 C 20.34375 11.054688 20.605469 9.21875 20.527344 7.960938 C 20.277344 4.097656 17.382812 0.851562 13.542969 0.140625 C 12.84375 0.0078125 11.558594 -0.0234375 10.90625 0.0703125 Z M 10.90625 0.0703125 "/>
    <Path d="M 11.132812 1.925781 C 9.605469 2.136719 8.253906 2.832031 7.167969 3.96875 C 5.195312 6.03125 4.757812 9.078125 6.074219 11.625 C 6.40625 12.265625 6.820312 12.8125 7.386719 13.359375 C 8.316406 14.253906 9.371094 14.816406 10.679688 15.101562 C 11.289062 15.238281 12.613281 15.25 13.234375 15.125 C 14.621094 14.851562 15.8125 14.195312 16.796875 13.175781 C 17.914062 12.007812 18.539062 10.632812 18.652344 9.046875 C 18.789062 7.105469 18.144531 5.335938 16.796875 3.933594 C 15.816406 2.921875 14.605469 2.253906 13.257812 1.992188 C 12.792969 1.898438 11.59375 1.859375 11.132812 1.925781 Z M 13.152344 2.691406 C 15.546875 3.167969 17.464844 5.128906 17.882812 7.519531 C 17.972656 8.054688 17.972656 9.054688 17.882812 9.589844 C 17.546875 11.503906 16.195312 13.234375 14.421875 14.011719 C 11.5 15.289062 8.109375 14.082031 6.675781 11.234375 C 6.234375 10.363281 6.046875 9.5625 6.046875 8.554688 C 6.046875 7.84375 6.132812 7.28125 6.328125 6.695312 C 6.890625 5.015625 8.148438 3.675781 9.765625 3.023438 C 10.214844 2.839844 10.773438 2.691406 11.230469 2.628906 C 11.648438 2.570312 12.726562 2.605469 13.152344 2.691406 Z M 13.152344 2.691406 "/>
    <Path d="M 11.617188 4.078125 C 11.398438 4.132812 11.105469 4.28125 9.28125 5.25 C 8.492188 5.667969 7.800781 6.050781 7.738281 6.109375 C 7.484375 6.34375 7.425781 6.773438 7.601562 7.085938 C 7.679688 7.21875 7.804688 7.332031 8.019531 7.457031 L 8.335938 7.644531 L 8.351562 8.664062 C 8.375 9.828125 8.410156 9.957031 8.796875 10.316406 C 9.121094 10.613281 10.050781 11.015625 10.847656 11.203125 C 11.421875 11.335938 12.558594 11.347656 13.054688 11.222656 C 13.15625 11.195312 13.171875 11.207031 13.171875 11.324219 C 13.167969 11.433594 13.128906 11.484375 12.960938 11.585938 C 12.652344 11.773438 12.496094 12.039062 12.476562 12.421875 C 12.453125 12.78125 12.519531 12.953125 12.792969 13.234375 C 13.421875 13.890625 14.5625 13.398438 14.550781 12.472656 C 14.546875 12.089844 14.324219 11.714844 14.007812 11.550781 C 13.890625 11.488281 13.875 11.457031 13.875 11.230469 C 13.875 10.996094 13.882812 10.976562 14.007812 10.945312 C 14.28125 10.878906 15.003906 10.5 15.203125 10.316406 C 15.320312 10.210938 15.460938 10.011719 15.519531 9.875 C 15.617188 9.652344 15.632812 9.558594 15.648438 8.640625 L 15.664062 7.644531 L 15.984375 7.457031 C 16.234375 7.308594 16.328125 7.222656 16.402344 7.0625 C 16.574219 6.707031 16.503906 6.320312 16.234375 6.089844 C 16.09375 5.972656 13.234375 4.445312 12.695312 4.195312 C 12.394531 4.058594 11.902344 4.007812 11.617188 4.078125 Z M 12.25 4.785156 C 12.347656 4.808594 13.1875 5.234375 14.113281 5.726562 C 15.378906 6.398438 15.796875 6.640625 15.789062 6.699219 C 15.777344 6.742188 15.324219 7.011719 14.652344 7.367188 L 13.53125 7.960938 L 12.765625 7.449219 C 12.34375 7.167969 11.96875 6.9375 11.929688 6.9375 C 11.671875 6.9375 11.46875 7.214844 11.570312 7.429688 C 11.597656 7.496094 11.878906 7.714844 12.210938 7.9375
    L 12.800781 8.335938 L 12.648438 8.429688 C 12.183594 8.710938 11.875 8.6875 11.175781 8.328125 C 9.546875 7.496094 8.226562 6.765625 8.210938 6.699219 C 8.203125 6.640625 8.605469 6.402344 9.820312 5.761719 C 11.820312 4.703125 11.875 4.679688 12.25 4.785156 Z M 10.257812 8.644531 C 10.867188 8.96875 11.46875 9.253906 11.59375 9.285156 C 11.949219 9.371094 12.40625 9.320312 12.773438 9.144531 C 12.945312 9.066406 13.105469 9 13.128906 9 C 13.15625 9 13.167969 9.3125 13.164062 9.734375 L 13.148438 10.476562 L 12.867188 10.539062 C 12.464844 10.621094 11.484375 10.617188 11.066406 10.527344 C 10.332031 10.367188 9.378906 9.960938 9.191406 9.722656 C 9.101562 9.605469 9.09375 9.539062 9.09375 8.832031 C 9.09375 8.410156 9.101562 8.0625 9.121094 8.0625 C 9.136719 8.0625 9.648438 8.324219 10.257812 8.644531 Z M 14.90625 8.832031 C 14.90625 9.539062 14.898438 9.605469 14.808594 9.722656 C 14.71875 9.835938 14.035156 10.21875 13.921875 10.21875 C 13.894531 10.21875 13.875 9.929688 13.875 9.402344 L 13.875 8.582031 L 14.359375 8.324219 C 14.621094 8.179688 14.851562 8.0625 14.875 8.0625 C 14.890625 8.0625 14.90625 8.410156 14.90625 8.832031 Z M 13.734375 12.234375 C 13.890625 12.390625 13.875 12.585938 13.707031 12.734375 C 13.5625 12.867188 13.453125 12.871094 13.292969 12.746094 C 13.050781 12.554688 13.1875 12.140625 13.5 12.140625 C 13.578125 12.140625 13.683594 12.183594 13.734375 12.234375 Z M 13.734375 12.234375 "/>
    <Path d="M 5.304688 3.265625 C 4.777344 3.90625 4.164062 5.035156 3.894531 5.859375 C 3.519531 7.015625 3.398438 7.992188 3.472656 9.15625 C 3.585938 10.808594 4.175781 12.382812 5.1875 13.726562 C 6.015625 14.816406 9.425781 19.65625 9.390625 19.683594 C 9.371094 19.703125 9.121094 19.753906 8.835938 19.800781 C 7.054688 20.085938 5.773438 20.667969 5.429688 21.347656 C 5.300781 21.589844 5.300781 21.957031 5.429688 22.203125 C 5.945312 23.210938 8.273438 23.898438 11.484375 23.984375 C 14.046875 24.050781 16.566406 23.640625 17.765625 22.953125 C 18.097656 22.765625 18.453125 22.433594 18.570312 22.203125 C 18.695312 21.960938 18.695312 21.582031 18.566406 21.34375 C 18.359375 20.929688 17.722656 20.5 16.898438 20.21875 C 16.433594 20.058594 15.566406 19.851562 15.070312 19.78125 C 14.839844 19.75 14.628906 19.707031 14.609375 19.6875 C 14.585938 19.664062 15.515625 18.328125 16.671875 16.710938 C 17.828125 15.09375 18.890625 13.601562 19.035156 13.402344 C 19.179688 13.195312 19.375 12.898438 19.453125 12.734375 C 19.597656 12.460938 19.601562 12.429688 19.542969 12.304688 C 19.503906 12.230469 19.421875 12.144531 19.355469 12.121094 C 19.117188 12.042969 19.011719 12.113281 18.753906 12.542969 C 18.625 12.765625 18.371094 13.140625 18.191406 13.375 C 18.015625 13.613281 16.640625 15.523438 15.144531 17.625 C 13.621094 19.761719 12.367188 21.484375 12.296875 21.523438 C 12.125 21.632812 11.875 21.632812 11.703125 21.523438 C 11.632812 21.484375 10.382812 19.773438 8.855469 17.625 C 7.359375 15.523438 5.992188 13.613281 5.816406
    13.382812 C 5.039062 12.351562 4.585938 11.367188 4.304688 10.101562 C 4.214844 9.695312 4.199219 9.492188 4.199219 8.578125 C 4.195312 7.648438 4.210938 7.460938 4.304688 7.03125 C 4.570312 5.820312 5.066406 4.734375 5.792969 3.789062 C 5.933594 3.609375 6 3.476562 6 3.378906 C 6 3.1875 5.855469 3.046875 5.652344 3.046875 C 5.523438 3.046875 5.460938 3.085938 5.304688 3.265625 Z M 10.496094 21.140625 C 10.808594 21.578125 11.132812 21.988281 11.21875 22.050781 C 11.667969 22.390625 12.332031 22.390625 12.78125 22.050781 C 12.867188 21.988281 13.191406 21.578125 13.5 21.140625 C 14.054688 20.371094 14.070312 20.351562 14.21875 20.371094 C 16.03125 20.605469 17.242188 20.976562 17.765625 21.449219 C 18.027344 21.6875 18.027344 21.867188 17.757812 22.101562 C 16.867188 22.867188 14.222656 23.363281 11.460938 23.277344 C 9.652344 23.226562 8.375 23.023438 7.238281 22.617188 C 6.476562 22.351562 6.046875 22.039062 6.046875 21.773438 C 6.046875 21.242188 7.660156 20.628906 9.726562 20.375 C 9.804688 20.367188 9.882812 20.351562 9.898438 20.347656 C 9.914062 20.347656 10.1875 20.699219 10.496094 21.140625 Z M 10.496094 21.140625 "/></>
};

const SvgElement = ({name, color, size, stroke, estilos, type}) => {
    if(!size) size = "28";
    if(!color) color = theme.color.grey;
    if(type === 'caution') color = 'tomato';
    if(!stroke) stroke = 'none';
    if(!estilos) estilos = styles.container;
    return (
    <View style={estilos}>
        <Svg height={size} width={size} viewBox="0 0 24 24" fill={color} stroke={stroke}>
            {icons[name]}
            {/*Dentro del path, con: stroke="red" cambio el color del borde del dibujo */}
        </Svg>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SvgElement;