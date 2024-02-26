import imgHome from "../Img/hom.png";
export const Home = () => {
    return(
        <div className="container pt-2" >
            <div className="row">
                <div className="col-sm-8">
                    <h1 className="text-warning fs-h6 text-center">
                        UniverWax est un site  <br/> de vente d'habit professionnels
                    </h1>
                    <div className="">
                        <img className="img-fluid" src={imgHome} alt="home" />
                    </div>
                </div>
                
            </div>
         </div>
    )
}