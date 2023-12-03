import'./Tarif.scss'

export default function Tarif({ item, activeCard, setId}) {
    const cl = activeCard?'active':null;
    function handleActive(){
        setId(item.id)
    }
    return (
        <div className={`tarif-card ${cl}`} onClick={handleActive}> 
            <div className={`tarif-name ${item.color}`}>{item.name}</div>
            <div className={`tarif-price ${item.colorLite}`}>{item.price}<p className="fix">руб/мес</p></div>
            <div className="tarif-speed ">{item.speed}</div>
            <div className="tarif-text">{item.text}</div> 
        </div> 
    );
}

