import dynamic from "next/dynamic";

function Location() {
  
  const Map = dynamic(() => import("./../components/Map"), {
    ssr: false
  });

  return (
    <>
        <Map/>
    </>
  );
}



export default Location