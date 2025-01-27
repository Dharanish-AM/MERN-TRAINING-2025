import Button from "./Button";
import TrackingButtonComponent from "./TrackingButtonComponent";
const HoC =()=>{
    const ButtonWithTracking=TrackingButtonComponent(Button)
    return(
         <div>
            <h3>this is example of higher order component</h3>
            <ButtonWithTracking name="Login" trackingInfo={{customerId:"1234567",password:"bdkdedj"}} />
         </div>
    );
};
export default HoC;