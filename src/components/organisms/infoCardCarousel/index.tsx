import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
const listImg = [
    'https://www.phucanh.vn/media/news/1811_AsusROGGT51-3.jpg',
    'https://www.hanoicomputer.vn/media/lib/mytnhchigameasus2.jpg',
    'https://i.ytimg.com/vi/mOY-gcGhocM/maxresdefault.jpg'
]
const InfoCardCarousel: React.FC = () => (
    <div className="o-infoCardCarousel">
        <Row>
            <Col lg={5}>
                <div className="o-infoCardCarousel_wrapInfo">
                    <div className="o-infoCardCarousel_info">
                        <div className="o-infoCardCarousel_info_title">
                            <Text>
                                Computer
                        </Text>
                        </div>
                        <div className="o-infoCardCarousel_info_description">
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ad sapiente provident aliquam,
                                modi quo dolorem cumque beatae minima.
                                Fuga vero libero tempore, doloremque quam dolores totam illum vel et nisi!
                        </Text>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={7}>
                <div className="o-infoCardCarousel_carousel_wrap">
                    <div className="o-infoCardCarousel_carousel">
                        {
                            listImg.map((item, index) => (
                                <div key={`item_${index.toString()}`} className="o-infoCardCarousel_carousel_image">
                                    <Image
                                        ratio="6x4"
                                        src={item}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="o-infoCardCarousel_carousel_navigator">
                        <div className="o-infoCardCarousel_carousel_prev"></div>
                        <div className="o-infoCardCarousel_carousel_next"></div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
)
export default InfoCardCarousel;