import {useCustomization} from "../context/Customization.jsx";

export function Configurator() {
    const {material, setMaterial, legs, setLegs, color, setColor, colors} = useCustomization();

    return (
        <div className="configurator">
            <p className="configurator__title">Chair Material</p>
            <div className={['configurator__material', material].join(' ')}>
                <span onClick={() => setMaterial('leather')}>Leather</span>
                <span onClick={() => setMaterial('fabric')}>Fabric</span>
            </div>
            <p className="configurator__sub-title">Color</p>
            <div className="configurator__colors">
                {
                    Object.keys(colors).map((key) => (
                        <span
                            key={key}
                            className={[color === colors[key] ? 'active' : '', key].join(' ')}
                            onClick={() => setColor(colors[key])}
                            style={{backgroundColor: colors[key]}}
                        >
                            {key}
                        </span>
                    ))
                }
            </div>
            <p className="configurator__sub-title">Legs</p>
            <div className={['configurator__material', legs].join(' ')}>
                <span onClick={() => setLegs('big')}>Variant 1</span>
                <span onClick={() => setLegs('small')}>Variant 2</span>
            </div>
        </div>
    )
}
