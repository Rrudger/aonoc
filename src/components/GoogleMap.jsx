const  MapCastelfiorentino = () => {
  return (
    <iframe className='self-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.8690959970436!2d10.971877545502442!3d43.60618989754434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a6b0004a49b5f%3A0xf0cea6f0aafd9326!2sPieve%20dei%20Santi%20Ippolito%20e%20Biagio!5e0!3m2!1sit!2sit!4v1724695040631!5m2!1sit!2sit" style={{width:"300px", height:"300px", border: "0"}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
};

const MapCertaldo = () => {
  return (
    <iframe className='self-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.6127583639574!2d11.044942011333072!3d43.54891196909103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a3f68e180848f%3A0xc6bbec1892923c34!2sChiesa%20Madre%20dei%20Santi%20Jacopo%20e%20Filippo!5e0!3m2!1sit!2sit!4v1724698491193!5m2!1sit!2sit" style={{width:"300px", height:"300px", border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
};

const MapEmpoli = () => {
  return  (
    <iframe className='self-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.6057214072257!2d10.944180876615798!3d43.71874224818876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a69202baa6207%3A0x1ff32d19a91e25fd!2sChiesa%20e%20convento%20di%20Santo%20Stefano%20degli%20Agostiniani!5e0!3m2!1sit!2sit!4v1724698633614!5m2!1sit!2sit" style={{width:"300px", height:"300px", border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
};

const Map =  ({ city }) => {
  if (city ===  'Empoli') {
    return <MapEmpoli />
  }
  if (city === 'Certaldo') {
    return <MapCertaldo />
  }
  return <MapCastelfiorentino />

};

export default Map;
