import Image from "next/image";
import Link from "next/link";



export default function Card({imagePath}) {
    return (
        <div className="card m-auto mt-5 mb-5" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    {/* <img src={imageUrl} className="img-fluid rounded-start" alt="..."> */}
                    <Image
                        src={imagePath}
                        className="img-fluid rounded-start"
                        alt="Profile picture"
                        width={400}
                        height={400}
                        priority={true}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body rounded-start">
                        <h5 className="card-title">Hi! I am Sergio Rubino</h5>
                        <p className="card-text">Argentinian technology enthusiast</p>
                        <p className="card-text"><small className="text-body-secondary">Visit the following sites:</small></p>
                        <Link href='https://github.com/milocai'>
                            <i className="fa-brands fa-square-github fa-2xl" style={{color: '#808080'}}></i>
                        </Link>
                        &nbsp;
                        <Link href='https://www.linkedin.com/in/sarubino/'>
                            <i className="fa-brands fa-linkedin fa-2xl" style={{color: '#808080'}}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}