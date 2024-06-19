
export default function Map() {


  return (<div id="Map" className="h-dvh">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1760655448356!2d-122.0842496846927!3d37.42199977982208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24e4c1c49d5%3A0x2b5b0b7f8e52b2c7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633079128712!5m2!1sen!2sus"
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      title="Google Map"
      className="w-full h-full"
    ></iframe>
  </div>);
}