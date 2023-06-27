import {createContext, useContext, useState} from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState('leather');
    const [legs, setLegs] = useState('big');
    const colors = {
        green: '#008000',
        blue: '#0000FF',
        yellow: '#FFFF00'
    };
    const [color, setColor] = useState(colors.green);

    return (
        <CustomizationContext.Provider value={{
            material,
            setMaterial,
            legs,
            setLegs,
            colors,
            color,
            setColor
        }}>
            {props.children}
        </CustomizationContext.Provider>
    );
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}
