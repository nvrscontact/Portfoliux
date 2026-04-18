export default function Technology({title,img,heightImg}){
    return(
           <div className="technology">

                <img src={img} alt="" style={{height: heightImg || "35px"}} />
                <span>{title}</span>
            
            </div>
    )
}