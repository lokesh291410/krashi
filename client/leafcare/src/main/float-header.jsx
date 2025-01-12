import Container from "react-bootstrap/esm/Container"
import Carousel from 'react-bootstrap/Carousel';

function float_header() {
    return (
        <>
        <h1>Add Anything here logo and carosel</h1>
        <Container>
            <Carousel interval={100}>
                {["https://www.kindpng.com/picc/m/610-6105332_cheems-png-transparent-png.png",
                "https://i.imgflip.com/3nzkub.png?a482184",
                 "https://pngimg.com/d/doge_meme_PNG1.png",
                 "https://pngimg.com/d/doge_meme_PNG6.png",
                 "https://i.pinimg.com/736x/ff/05/93/ff059360612e313865753d827bfc5cc3.jpg"   
            ].map((link) => (
                <Carousel.Item key={link}>
                    <img
                    className="d-block w-100"
                    src={link}
                    />
                    <Carousel.Caption>    
                    <h3>Cheems</h3>
                    <p>This is CHEEMS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
                </Carousel>
        </Container>

        </>
    )}

 export default float_header   