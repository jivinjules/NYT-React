import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import moment from 'moment'

class Articles extends Component {
  state = {
    articles: [],
    startYear: "",
    endYear: "",
    topic: "",
    articlesToSave: []
  };

  // componentDidMount() {
  //   this.getArticles();
  // }

  /////////////////ROUTE FOR SAVED
  getArticle = () => {
    API.getArticle()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  //////////////////ROUTE TO DELETE
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  ////////////WHEN THEY PUT IN A TOPIC
  handleTopic = e => this.setState({ topic: e.target.value })

  //////////////WHEN THEY PUT IN A START YEAR
  handleStartYear = e => this.setState({ startYear: e.target.value })

  ///////////////////WHEN THEN PUT IN A END YEAR
  handleEndYear = e => this.setState({ endYear: e.target.value })

  ////////////////GETS ARTICLES FROM NYT
  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res => {
        this.setState({ articles: res.data.response.docs })
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
      <div className='search'>
        <Row >
          <Col size="md-12">
          <br/>
            <form >
              <h5>Search for a Topic!</h5>
              <Input
                value={this.state.topic}
                onChange={this.handleTopic}
                name="topic"
                placeholder="Topic (required)"
              />
               {/* <h5>Enter a Start Year!</h5>
              <Input
                value={this.state.startYear}
                onChange={this.handleStartYear}
                name="startYear"
                placeholder="Start Date (ex. 2005)"
              />
               <h5>Enter an End Year!</h5>
              <Input
                value={this.state.endYear}
                onChange={this.handleEndYear}
                name="endYear"
                placeholder="End Year (ex. 2010)"
              /> */}
              <FormBtn id='form'
                onClick={this.handleFormSubmit}
              >
                Find Articles
              </FormBtn>
            </form>
          </Col>
        </Row>
    </div>

      <div className='search'>
          <Row>
          <Col size="md-12">
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem
                    key={article._id}
                    title={article.headline.main}
                    date={article.pub_date}
                    url={article.web_url}
                  ><button id='read' ><a href={article.web_url}>Read it!{' '}<i className="far fa-newspaper"></i></a></button>{' '}  <Link to={"/articles/" + article._id} id='link'>{article.headline.main}</Link>{"  "} published on {moment(article.pub_date).format('LL')}
                 <button id='save' >SAVE</button> </ListItem>
                ))}
              </List>
            ) : (
                <h3 id='none'>No Results to Display</h3>
              )}
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default Articles;

