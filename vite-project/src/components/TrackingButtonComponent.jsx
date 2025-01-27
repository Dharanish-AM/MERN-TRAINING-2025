const TrackingButtonComponent=(Component)=>{
    const handleClick=()=>{
        console.log("login in fetch the tracking ifo", props.trackInfo)
           }
       return(props)=>{

             return(
                <div onClick={handleClick}>
                   <h1>this is HOC  </h1>
                   <Component {...props}  />
                </div>

             )
       }
}
export default TrackingButtonComponent;