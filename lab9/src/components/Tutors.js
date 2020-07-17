import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const Commerce = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Our Tutors</h1>
          <p>
            Our tutors are educated individuals who offer high-quality services
            for any kinf of help you need. Reach out to them and explore the
            best learning plan tailored to your needs!
          </p>
        </Container>
      </Jumbotron>

      <br />

      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/stem">
          <button type="button" class="btn btn-outline-secondary">
            STEM
          </button>
        </Link>
        <Link to="/social">
          <button type="button" class="btn btn-outline-secondary">
            Social Sciences
          </button>
        </Link>
        <Link to="/arts">
          <button type="button" class="btn btn-outline-secondary">
            Arts
          </button>
        </Link>
        <Link to="/commerce">
          <button type="button" class="btn btn-outline-secondary">
            Commerce
          </button>
        </Link>
      </div>
      <br />
      <br />

      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
          />
          <Card.Body>
            <Card.Title>Jorge</Card.Title>
            <Card.Text>
              Field of Study: Aerospace Engineering
              <br />
              Education: MIT <br />
              Degree type: Master's
              <br />
              Rate: $45/hour
              <br />
              Language: English & Spanish
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
          />
          <Card.Body>
            <Card.Title>Selma</Card.Title>
            <Card.Text>
              Field of Study: Biology
              <br />
              Education: Sydney University
              <br />
              Degree type: Bachelor's
              <br />
              Rate: $25/hour
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://d279m997dpfwgl.cloudfront.net/wp/2019/07/07-23_Pemberton-1000x665.jpg"
          />
          <Card.Body>
            <Card.Title>Albert</Card.Title>
            <Card.Text>
              Field of Study: Chemistry
              <br />
              Education: National University of Singapore
              <br />
              Degree type: Master's
              <br />
              Rate: $50/hour
              <br />
              Language: English & Mandarin
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i2.wp.com/www.comicsbeat.com/wp-content/uploads/2019/07/raina-telgemeier.jpg?fit=1200%2C600&ssl=1"
          />
          <Card.Body>
            <Card.Title>Harriet</Card.Title>
            <Card.Text>
              Field of Study: Civil Engineering
              <br />
              Education: Carleton University
              <br />
              Degree type: Master's
              <br />
              Rate: $40/hour
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.epbusinessjournal.com/wp-content/uploads/2020/03/Olaya.jpg"
          />
          <Card.Body>
            <Card.Title>Zander</Card.Title>
            <Card.Text>
              Field of Study: Computer Science
              <br />
              Education: Federal University of Rio de Janeiro
              <br />
              Degree type: Bachelor's
              <br />
              Rate: $30/hour
              <br />
              Language: English, Portugese & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.stmarytx.edu/wp-content/uploads/2020/06/Robbie-Bishop-Monroe-outdoors.jpg"
          />
          <Card.Body>
            <Card.Title>Zawadi</Card.Title>
            <Card.Text>
              Field of Study: Electrical Engineering
              <br />
              Education: University of Nairobi
              <br />
              Degree type: PhD
              <br />
              Rate: $60/hour
              <br />
              Language: English & Swahili
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.thestar.com/LMFahhO4oBtAOyB24xoQ1gSPfW8=/1200x1200/smart/filters:cb(1548689313694)/https://www.thestar.com/content/dam/thestar/entertainment/television/analysis/2019/01/25/is-this-the-breakout-year-for-asian-men-in-leading-roles/simu_liu.jpg"
          />
          <Card.Body>
            <Card.Title>Li</Card.Title>
            <Card.Text>
              Field of Study: Mathematics
              <br />
              Education: Peking University
              <br />
              Degree type: Master's
              <br />
              Rate: $40/hour
              <br />
              Language: English & Mandarin
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://theartsdesk.com/sites/default/files/styles/mast_image_landscape/public/mastimages/img-2973_orig.jpg?itok=3mBBVJH1"
          />
          <Card.Body>
            <Card.Title>Kate</Card.Title>
            <Card.Text>
              Field of Study: Mechanical Engineering
              <br />
              Education: Stanford University
              <br />
              Degree type: Master's
              <br />
              Rate: $50/hour
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.sciencesource.com/Doc/TR1_WATERMARKED/9/5/0/5/SS2149695.jpg?d63641369435"
          />
          <Card.Body>
            <Card.Title>Hans</Card.Title>
            <Card.Text>
              Field of Study: Physics
              <br />
              Education: University of Zurich
              <br />
              Degree type: Master's
              <br />
              Rate: $40/hour
              <br />
              Language: English, French & German
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003422/img/basic/a0003422_main.jpg?20200705182831&q=80&rw=750&rh=536"
          />
          <Card.Body>
            <Card.Title>Antoinette</Card.Title>
            <Card.Text>
              Field of Study: Anthropology
              <br />
              Education: Sciences Po Paris
              <br />
              Degree type: Master's
              <br />
              Rate: $40/hour
              <br />
              Language: English, French & Spanish
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003408/img/basic/a0003408_main.jpg?20200701092708&q=80&rw=750&rh=536"
          />
          <Card.Body>
            <Card.Title>Maria</Card.Title>
            <Card.Text>
              Field of Study: Sociology
              <br />
              Education: Sapienza University of Rome
              <br />
              Degree type: Master's
              <br />
              Rate: $35/hour
              <br />
              Language: English, Italian, German
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://s.yimg.com/uu/api/res/1.2/SQGQqdo.YgFh6MVvB0J2kQ--~B/aD01MzY7dz03NTA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/live_japan_718/184969cc7c2de2c614f16b9c12f37bc1"
          />
          <Card.Body>
            <Card.Title>Ilina</Card.Title>
            <Card.Text>
              Field of Study: Political Science
              <br />
              Education: Science Po Reims
              <br />
              Degree type: PhD
              <br />
              Rate: $60/hour
              <br />
              Language: English, French & Italian
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.betakit.com/wp-content/uploads/2017/03/saadia.jpg"
          />
          <Card.Body>
            <Card.Title>Darquise</Card.Title>
            <Card.Text>
              Field of Study: Criminlogy
              <br />
              Education: University of Ottawa
              <br />
              Degree type: Bachelor's
              <br />
              Rate: $30/hour
              <br />
              Language: English, French & Dutch
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://canadianwomen.org/wp-content/uploads/2017/11/Angela_Johnson_V2.png"
          />
          <Card.Body>
            <Card.Title>Acadia</Card.Title>
            <Card.Text>
              Field of Study: Human Rights & Conflict Studies
              <br />
              Education: Syracuse University
              <br />
              Degree type: Master's
              <br />
              Rate: $49/hour
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://nationalpostcom.files.wordpress.com/2017/10/missing_cdn_peru_20171018.jpg"
          />
          <Card.Body>
            <Card.Title>Hillary</Card.Title>
            <Card.Text>
              Field of Study: History
              <br />
              Education: University of Ottawa
              <br />
              Degree type: Master's
              <br />
              Rate: $45/hour
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.abouttimemagazine.co.uk/wp-content/uploads/2018/03/unnamed-1-2.jpg"
          />
          <Card.Body>
            <Card.Title>Sheila Ann</Card.Title>
            <Card.Text>
              Field of Study: Art History
              <br />
              Education: University of Bristol
              <br />
              Degree type: Bachelor's
              <br />
              Rate: $25/hour
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.tyzhden.ua/content/digest/week/2013/may/24/36b.jpg"
          />
          <Card.Body>
            <Card.Title>Jan</Card.Title>
            <Card.Text>
              Field of Study: Philosophy
              <br />
              Education: Taras Shevchenko National University of Kyiv
              <br />
              Degree type: Master's
              <br />
              Rate: $40/hour
              <br />
              Language: English, Ukrainian
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://c.stocksy.com/a/3vr800/z9/2113893.jpg"
          />
          <Card.Body>
            <Card.Title>Tess</Card.Title>
            <Card.Text>
              Field of Study: Literature
              <br />
              Education: Delft University
              <br />
              Degree type: Master's
              <br />
              Rate: $50/hour
              <br />
              Language: English, French, Italian & Spanish
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.advocate.com/sites/advocate.com/files/2012/12/03/MichaelLucasx400_ADVOCATE.jpg"
          />
          <Card.Body>
            <Card.Title>Firas</Card.Title>
            <Card.Text>
              Field of Study: Journalism
              <br />
              Education: Tunis University
              <br />
              Degree type: PhD
              <br />
              Rate: $65/hour
              <br />
              Language: English, French, Arabic
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.cliqueinc.com/posts/88311/fashion-items-clothes-accessories-that-new-york-girls-love-88311-1512749656320-main.700x0c.jpg"
          />
          <Card.Body>
            <Card.Title>Eva</Card.Title>
            <Card.Text>
              Field of Study: Fashion & Textile
              <br />
              Education: Fashion Institute of Technology
              <br />
              Degree type: Bachelor's
              <br />
              Rate: $35/hour
              <br />
              Language: English, French & Italian
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://t3.ftcdn.net/jpg/02/11/26/02/240_F_211260238_2J8N07Cajg8FODA94EVezD5HBNV5HVCA.jpg"
          />
          <Card.Body>
            <Card.Title>Mahmoud</Card.Title>
            <Card.Text>
              Field of Study: Graphic Design
              <br />
              Education: Sheridan College
              <br />
              Degree type: College
              <br />
              Rate: $30/hour
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.abc.net.au/cm/rimage/8856540-3x2-xlarge.jpg?v=4"
          />
          <Card.Body>
            <Card.Title>Katie</Card.Title>
            <Card.Text>
              Field of Study: Accounting
              <br />
              Education: London School of Economics
              <br />
              Degree type: Bachelor's
              <br />
              Rate: $45/hour
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://alexis.lindaikejisblog.com/photos/shares/5c61f485d92a3.jpg"
          />
          <Card.Body>
            <Card.Title>Cameron</Card.Title>
            <Card.Text>
              Field of Study: Finance
              <br />
              Education: University of British Colombia
              <br />
              Degree type: Bachelor's
              <br />
              Rate: $50/hour
              <br />
              Language: English
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://nimd.org/wp-content/uploads/2019/06/Nanci-please-use-as-main-image-cropped-1.jpg"
          />
          <Card.Body>
            <Card.Title>Kiana</Card.Title>
            <Card.Text>
              Field of Study: International Management
              <br />
              Education: Complutense University of Madrid
              <br />
              Degree type: Master's
              <br />
              Rate: $55/hour
              <br />
              Language: English & Spanish
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.canadiansme.ca/wp-content/uploads/2020/03/mary-ng.jpg"
          />
          <Card.Body>
            <Card.Title>Julianne</Card.Title>
            <Card.Text>
              Field of Study: Human Resources
              <br />
              Education: Haute École de Commerce Montréal
              <br />
              Degree type: Master's
              <br />
              Rate: $50/hour
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://lh3.googleusercontent.com/proxy/A7JZ7h-uGmJR-BsqRSQWKAiBwENT1RPE1mGtcUTpXU3QUw_HHQPlPodwpvluzWOXpy4NTQkxSjPSj-vv3ASWtmT-YpT7Dio-zZKIqp_bYSj17h6E0CluolNwhEPFulxO_jI"
          />
          <Card.Body>
            <Card.Title>Samuel</Card.Title>
            <Card.Text>
              Field of Study: Business Technology Management
              <br />
              Education: University of Winnipeg
              <br />
              Degree type: Bachelor's
              <br />
              Rate: $40/hour
              <br />
              Language: English & French
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.abouther.com/sites/default/files/2017/09/19/sarahalsuhaimi.jpg"
          />
          <Card.Body>
            <Card.Title>Analisa</Card.Title>
            <Card.Text>
              Field of Study: Healthcare Analytics
              <br />
              Education: University of Buenos Aires
              <br />
              Degree type: Master's
              <br />
              Rate: $53/hour
              <br />
              Language: English & Spanish
              <br />
            </Card.Text>
            <Button variant="dark">Contact</Button>
          </Card.Body>
        </Card>
      </CardColumns>

      <br />
      <footer>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Explore</th>
            <th>Contact</th>
          </tr>
          <tr>
            <Link to="/">
              <td>Home</td>
            </Link>
            <td>Phone: 613 999 9999</td>
          </tr>
          <tr>
            <Link to="/commerce">
              <td>Subjects</td>
            </Link>
            <td>Email: contact@findyourtutor.com</td>
          </tr>
          <tr>
            <Link to="/tutors">
              <td>Tutors</td>
            </Link>
            <td>Headquarters: 1600 Amphitheatre Pkwy, Mountain View, CA</td>
          </tr>
          <tr>
            <Link to="/about">
              <td>About</td>
            </Link>
          </tr>
          <tr>
            <Link to="/evaluations">
              <td>Evaluations</td>
            </Link>
          </tr>
        </table>

        <br />

        <p>Author: Elise Cloutier</p>
      </footer>
    </div>
  );
};

export default Commerce;
