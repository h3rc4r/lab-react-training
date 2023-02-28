import React from 'react'
const CreditCard = ({...props}) => {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}= props;
    const estilos = {background: bgColor, color: color}
  return (
    <div className='moneyCard' style={estilos}>
        <div className='right'>
            <img width={45} src= {type === "Visa" ? "https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo.png"
                : "https://1361832452.rsc.cdn77.org/gesa/files/2560px-MasterCard_Logo.svg_.png?1626945991"} alt=""
            />
        </div>
        <div className='numberCard'><strong><p>**** **** **** {number.toString().slice(-4)}</p></strong></div>
        <div>
            <div className=' left infoCard'>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p className='bankCard'>{bank}</p>
            </div>
            <p className='left'>{owner}</p>
        </div>
    </div>
  )
}
export default CreditCard;