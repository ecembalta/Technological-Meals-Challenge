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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
        {icons.map((item, index) => (
          <div key={index}>
            <img style={{ transform: "scale(.7)" }} src={item.icon} />
            <span>{item.iconName}</span>
          </div>
        ))}
      </div>
      <div style={{backgroundColor: "#FAF7F2", width: "100%"}}> 
      <Container style={{
        maxWidth: "700px",
        padding: "2rem"
      }}>
        <Row>
          <Col md={6}>
            <Card className="text-white" style={{ height: '280px', backgroundColor: '#dc3545', padding: '0' }}>
              <CardImg 
                src={card1} 
                alt="Card 1" 
                style={{ 
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  position: 'absolute'
                }} 
              />
              <CardImgOverlay style={{padding: "1rem"}}>
                <CardTitle tag="h2" style={{fontSize: "42px", width: "70%"}}>Özel Lezzetus</CardTitle>
                <CardText>Position:Absolute Acı Burger</CardText>
                <Button onClick={handleClick} size="sm" color="light" style={{color: '#CE2829', borderRadius: '20px', fontSize: '12px'}}>SİPARİŞ VER</Button>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-white mb-2" style={{ height: '135px', padding: '0' }}>
              <CardImg 
                src={card2} 
                alt="Card 2" 
                style={{ 
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  position: 'absolute'
                }} 
              />
              <CardImgOverlay style={{padding: "1rem"}}>
                <CardTitle tag="h2" style={{fontSize: "18px", width: "50%"}}>Hackathlon Burger Menü</CardTitle>
                <Button onClick={handleClick} size="sm" color="light" style={{color: '#CE2829', borderRadius: '20px', fontSize: '12px'}}>SİPARİŞ VER</Button>
              </CardImgOverlay>
            </Card>
            <Card className="text-black mb-3" style={{ height: '135px', padding: '0' }}>
              <CardImg 
                src={card3} 
                alt="Card 2" 
                style={{ 
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  position: 'absolute'
                }} 
              />
              <CardImgOverlay style={{padding: "1rem"}}>
                <CardText tag="h2" style={{fontSize: "18px", width: "50%"}}>Çoooook hızlı npm gibi kurye</CardText>
                <Button onClick={handleClick} size="sm" color="light" style={{color: '#CE2829', borderRadius: '20px', fontSize: '12px'}}>SİPARİŞ VER</Button>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{
        textAlign: "center", 
        fontStyle: "italic",
        color: "#CE2829",
        fontSize: "2rem",
        marginBottom: "0.5rem",
        fontFamily: "Satisfy"
      }}>
        en çok paketlenen menüler
      </span>
      <h1 style={{
        textAlign: "center",
        fontSize: "2rem",
        marginBottom: "2rem"
      }}>
        Acıktıran Kodlara Doyuran Lezzetler
      </h1>

      <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        {icons.map((item, index) => (
          <div key={index} style={{border: "1px solid white", padding: "0.3rem", borderRadius: "50px", backgroundColor: "white"}}>
            <img style={{ transform: "scale(.7)" }} src={item.icon} />
            <span>{item.iconName}</span>
          </div>
        ))}
      </div>

      </div>
      </div>
    </div>
  );
}

export default HomeSection;

