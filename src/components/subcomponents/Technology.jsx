export default function Technology({title,img}){
    return(
           <div className="technology">

                <img src={img} alt="" />
                <span>{title}</span>
            
            </div>
    )
}