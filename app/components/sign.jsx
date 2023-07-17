import { Form } from "@remix-run/react/dist";
import signStyle from "./sign.css";
function Signn(){
    function toSignup(){
        document.getElementById("h1in").innerText = "sign up";
        document.getElementsByClassName("comment")[0].style.setProperty("animation-name", "frame1");
        

    }
    function toSignin(){
        document.getElementById("h1in").innerText = "sign in";
        document.getElementsByClassName("comment")[0].style.setProperty("animation-name", "frame2");
        

    }
    return(
        <main id="mainSign"> 
           
            <div className="in">
                <Form method="post"  className="formsign">
                    <div className="updata">
                        <div><input type="text" name="iduser" id="iduserIn" placeholder="Id User"/></div>
                        <div><input type="password" id="passwordIn" name="password" placeholder="Password"/></div>
                    </div>
                    <div><button name="button" value="in" id="btnIn">sign in</button></div>
                </Form>
                <h2 onClick={toSignup} id="h2in">sign up</h2>
            </div>
            <div className="comment">
                <h1 id="h1in">Sign in</h1>
            </div>
            <div className="up">
                <Form method="post" className="formsign">
                    <div className="updata">
                        <div><input type="text" name="iduser" id="iduserUp" placeholder="Id User"/></div>
                        <div><input type="password" id="passwordUp" name="password" placeholder="Password"/></div>
                    </div>
                    <div><button name="button" value="up" id="btnUp">sign up</button></div>
                </Form>
                <h2 onClick={toSignin}id="h2up">sign in</h2>
            </div>
        </main>
    )
}
export default Signn;
export function links() {
    return [{ rel: 'stylesheet', href: signStyle }];
}