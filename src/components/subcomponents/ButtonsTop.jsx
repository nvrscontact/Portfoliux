export default function Buttons({ title1,title2,title3 }){
    return(
        <section className="buttonsTop">
            <span className="buttons">{title1}</span>
            <span className="buttons">{title2}</span>
            <span className="buttons">{title3}</span>
        </section>
    )
}