import { Link } from "react-router-dom";
import ReactCommonData from "./ReactCommonData";

const ReactCommonTopic = () => {
    return (
        <>
            <section className="react_common_topic" id="react_common_topic">
                <div className="container">
                    <div className="mb-4">
                        <h2 className="heading_title">Latest Topic</h2>
                    </div>
                    <div className="row">
                        {
                            ReactCommonData.map((val) => {
                                return (
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <div className="white_widget_inner">
                                                <div className="row align-items-center">
                                                    <div className="col-sm-4">
                                                        <div className="grid">
                                                            <figure className="effect-lily">
                                                                <img src={val.imgsrc} className="stories_img"
                                                                    alt={val.altTag} />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <h3 className="small_heading p-0">{val.subtitle}</h3>
                                                        <Link href={val.url} className="effect_link">
                                                            {val.title}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReactCommonTopic;