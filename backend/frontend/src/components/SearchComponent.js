import React, { Component, useState } from 'react';
import axios from 'axios';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
    import classnames from 'classnames';
import './style.css'
import ResultText from './ResultText';
import Display from './Display'
import Display1 from './Displayone'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IconButton from '@material-ui/core/Icon';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

class SearchComponent extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        open:false,
        activeTab: '1',
        text: '',
        username: '',
        keyword: '',
        detailInfo: null,
        detailInfo2arr:[],
        detailInfo3arr:[]
        
      };
    }
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({ activeTab: tab });
      }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    submitHandler = (e) => {
        e.preventDefault()
        this.setState({username: ''})
        this.setState({keyword:''})
        this.setState({detailInfo2arr:[],
          detailInfo3arr:[]})
        axios.post('http://127.0.0.1:8000/api/classify', this.state)
        .then(response => {
         const detailInfo = {
           error: response.data.error,
           sentiment: response.data.msg,
           tweet: response.data.tweet
         };

         this.setState({
           detailInfo: detailInfo
         });
         
        })
        .catch(error => {
            this.setState({
              detailInfo: null
            })
        })
        
    }
    submitHandler1 = (e) => {
        e.preventDefault()
        console.log(this.state )
        this.setState({keyword:''})
        this.setState({
          detailInfo: null
        })
        this.setState({detailInfo3arr:[]})
        axios.post('http://127.0.0.1:8000/api/search/user', this.state)
        .then(response => {
            this.setState({
              detailInfo2arr: response.data.data
            });  
            this.setState({text: ''})

        })
        .catch(error => {
            this.setState({
              detailInfo2arr: []
            })
        })
        
    }
    submitHandler2 = (e) => {
        e.preventDefault()
        console.log(this.state )
        this.setState({username: ''})
        this.setState({text:''})
        this.setState({
          detailInfo: null
        })
        this.setState({detailInfo2arr:[]})
        // gentle-gorge-50568.herokuapp.com
        axios.post('http://127.0.0.1:8000/api/search/keyword', this.state)
        .then(response => {

            this.setState({
              detailInfo3arr: response.data.data
            });
        })
        .catch(error => {
            this.setState({
              detailInfo3: null,
              detailInfo3arr: []
            })
        })
        
    }
    render() {
        const { text, username, detailInfo,detailInfo2arr, keyword, detailInfo3arr} = this.state;

      return (
        <div>
          <Container>
              <Row>
                  <Col md="2"></Col>
                  <Col md="8" sm="12" className="mt-3" style = {{ border: "3px solid", borderRadius: "20px ", backgroundColor: "#fff"}}>
          <Nav tabs className="mt-3">
            <NavItem>
              <NavLink style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", 
          fontSize: "16px", padding: "15px 10px", width: "160px"}}
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}>
                <center className="maintext">Text</center>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", 
          fontSize: "16px", padding: "15px 10px", width: "160px"}}
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}>
                <center className="maintext">Username</center>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", 
           padding: "15px 10px", width: "160px"}}
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}>
                <center className="maintext">Keyword</center>
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent className="m-2" activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              { this.state.activeTab == 1 ? 
              <Row>
              <Col>
                <form onSubmit={ this.submitHandler} >
                  <input name="text" id="exampleText" className="inputtext"
                   style={{ backgroundColor: "black transparent" }} value={ text }
                  onChange={this.changeHandler}
                  rows ="5" 
                  /> 
                  <button type='submit' className="m-1" style={{ borderRadius: "0px 10px 10px 0px", color:"black"}}>
                    <IconButton>
                      <SearchOutlinedIcon />
                    </IconButton>
                  </button>
                  </form> 
                 
              </Col>
              
            </Row> 
              : null }
            </TabPane>
            <TabPane tabId="2">
              { this.state.activeTab == 2 ? 
              <Row>
              <Col >
              <form onSubmit={ this.submitHandler1} >
                  <input type="input" name="username" id="exampleText" className="inputtext"
                   style={{   backgroundColor: "black transparent" }} value={ username}
                  onChange={this.changeHandler} /> 
                  <button type='submit' className="m-1"  style={{borderRadius: "0px 10px 10px 0px", color:"black"}}>
                  <IconButton>
                      <SearchOutlinedIcon />
                    </IconButton>
                  </button>
                </form>     
              </Col>
            </Row> 
              : null }
            </TabPane>
            <TabPane tabId="3" >
              { this.state.activeTab == 3 ? 
              <Row>
              <Col>
              <form onSubmit={ this.submitHandler2} >
                  <input type="input" name="keyword" id="exampleText" className="inputtext"
                   style={{   backgroundColor: "black transparent" }} value={ keyword}
                  onChange={this.changeHandler} /> 
                
                  <button type='submit' className="m-1"  style={{ borderRadius: "0px 10px 10px 0px", color:"black"}}>
                  <IconButton>
                      <SearchOutlinedIcon />
                    </IconButton>
                  </button>
                  

                  </form>    
              </Col>
            </Row> 
              : null }
            </TabPane>
          </TabContent>
          </Col>
          <Col md="2"></Col>
          </Row>
        
          </Container>
          
          {detailInfo && <ResultText details = {detailInfo} />}
          {detailInfo2arr && <Display data={detailInfo2arr} />}
          {detailInfo3arr && <Display1 data={detailInfo3arr} />}
        </div>
      );
    }
  }
  export default SearchComponent;