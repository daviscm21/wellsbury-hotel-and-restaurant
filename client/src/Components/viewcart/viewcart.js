import React from "react";
import './viewcart.css';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ViewCart = () => {

          return(
              <div className='viewcart' > 
              
<form target="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" >
<input type="hidden" name="cmd" value="_s-xclick"></input>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"></input>
<input type="image" src="https://www.sandbox.paypal.com/en_GB/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"></input>
<FontAwesomeIcon icon={faCartShopping} className='fa-3x cart' />
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1"></img>
</form>
              </div>

        )
    }

export default ViewCart ;