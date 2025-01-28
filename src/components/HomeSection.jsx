import React from "react";
import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";
import card1 from "../../images/iteration-2-images/cta/kart-1.png";
import card2 from "../../images/iteration-2-images/cta/kart-2.png";
import card3 from "../../images/iteration-2-images/cta/kart-3.png";
import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import "./HomeSection.css";
const icons = [
  { icon: icon1, iconName: "YENİ! Kore" },
  { icon: icon2, iconName: "Pizza" },
  { icon: icon3, iconName: "Burger" },
  { icon: icon4, iconName: "Kızartmalar" },
  { icon: icon5, iconName: "Fast Food" },
  { icon: icon6, iconName: "Gazlı İçecek" },
];

function HomeSection({handleClick}) {
  return (
    <div className="home-section">
      <div className="icons-container">
        {icons.map((item, index) => (
          <div className="icon-item" key={index}>
            <img src={item.icon} />
            <span>{item.iconName}</span>
          </div>
        ))}
      </div>
      <div className="featured-section">
        <Container className="featured-container">
          <Row>
            <Col md={6}>
              <Card className="text-white main-card">
                <CardImg 
                  src={card1} 
                  alt="Card 1" 
                  className="card-image"
                />
                <CardImgOverlay className="card-overlay">
                  <CardTitle tag="h2" className="main-card-title">Özel Lezzetus</CardTitle>
                  <CardText>Position:Absolute Acı Burger</CardText>
                  <Button onClick={handleClick} className="card-button">SİPARİŞ VER</Button>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="text-white mb-2 small-card">
                <CardImg 
                  src={card2} 
                  alt="Card 2" 
                  className="card-image"
                />
                <CardImgOverlay className="card-overlay">
                  <CardTitle tag="h2" className="small-card-title">Hackathlon Burger Menü</CardTitle>
                  <Button onClick={handleClick} className="card-button">SİPARİŞ VER</Button>
                </CardImgOverlay>
              </Card>
              <Card className="text-black mb-3 small-card">
                <CardImg 
                  src={card3} 
                  alt="Card 2" 
                  className="card-image"
                />
                <CardImgOverlay className="card-overlay">
                  <CardText tag="h2" className="small-card-title">Çoooook hızlı npm gibi kurye</CardText>
                  <Button onClick={handleClick} className="card-button">SİPARİŞ VER</Button>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="home-section">
          <span className="featured-title">
            en çok paketlenen menüler
          </span>
          <h1 className="featured-subtitle">
            Acıktıran Kodlara Doyuran Lezzetler
          </h1>

          <div className="bottom-icons-container">
            {icons.map((item, index) => (
              <div className="bottom-icon-item" key={index}>
                <img src={item.icon} />
                <span>{item.iconName}</span>
              </div>
            ))}
          </div>
        </div>
        <Container className="food-container">
          <Row>
            <Col md={4}>
              <Card className="food-card">
                <CardImg src={food1} alt="Food 1" className="food-image" />
                <CardTitle tag="h6">Terminal Pizza</CardTitle>
                <div className="food-info">
                  <CardText>4.9 ⭐</CardText> 
                  <CardText>(200)</CardText>
                  <CardText>60₺</CardText>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="food-card">
                <CardImg src={food2} alt="Food 2" className="food-image" />
                <CardTitle tag="h6">Position Absolute Acı Pizza</CardTitle>
                <div className="food-info">
                  <CardText>4.9 ⭐</CardText> 
                  <CardText>(200)</CardText>
                  <CardText>60₺</CardText>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="food-card">
                <CardImg src={food3} alt="Food 3" className="food-image" />
                <CardTitle tag="h6">useEffect Tavuklu Burger</CardTitle>
                <div className="food-info">
                  <CardText>4.9 ⭐</CardText> 
                  <CardText>(200)</CardText>
                  <CardText>60₺</CardText>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeSection;

