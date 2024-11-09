import Header from "./Header";

function Singup(){
    return (
        <>
        <Header/>
            <div className="Form-main">
                <h1 className="singuph1">Sign up</h1>
                <form id="Form">
                    <div className="row"><br />
                        <label htmlFor="fname" id="f-name">First Name</label>
                        <input type="text" id="fname" /><br /><br />
                        <span id="span1"></span>
                    </div>
                    <div className="row"><br />
                        <label htmlFor="email" id="f-name">Email</label>
                        <input type="email" id="email" /><br /><br />
                        <span id="span2"></span>
                    </div>
                    <div className="row"><br />
                        <label htmlFor="Password" id="p-name">Password</label>
                        <input type="password" id="Password" /><br /><br />
                        <span id="span3"></span>
                    </div>
                    <div className="row">
                        <input type="submit" id="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Singup;
