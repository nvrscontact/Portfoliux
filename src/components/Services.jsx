import ButtonHeader from "./subcomponents/ButtonHeader";

export default function Services({}){
    return(
          <div className="center">
                      <ButtonHeader title={"Services"}/>
              <section className="list_design services">
                  <div>
                      <h1>Web Development <span>+1yr</span></h1>
                      <img src="/img/arrow_link.svg" alt="" />
                  </div>
                  <div>
                      <h1>Web UX / UI Design <span>1yr</span></h1>
                      <img src="/img/arrow_link.svg" alt="" />
                  </div>
              </section>
                  </div>
    )
}