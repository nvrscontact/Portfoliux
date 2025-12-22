import ButtonHeader from "./subcomponents/ButtonHeader";

export default function Languages(){
    return(
            <div className="center">
                <ButtonHeader title={"Languages"}/>
        <section className="list_design">
            <div>
                <h1>Spanish <span>C2</span></h1>
                <img src="/img/spain.svg" alt="" />
            </div>
            <div>
                <h1>English <span>A2</span></h1>
                <img src="/img/usa.svg" alt="" />
            </div>
        </section>
            </div>
    )
}