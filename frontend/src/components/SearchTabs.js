import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col,
Form, FormGroup, Input } from 'reactstrap';
import classnames from 'classnames';
import './style.css'
// import ParticlesBg from 'particles-bg'


const SearchTabs = (props) => {
    
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      {/* <ParticlesBg color="#ff000d" type="cobweb" num={200} bg={true} /> */}
    <Row>
    <Col md="3"></Col>
    <Col md="6" sm="12" className="mt-3 d-none d-lg-block"  style = {{ border: "3px solid", borderRadius: "20px ", backgroundColor: "#fff"}}>
      <Nav tabs className="mt-3">
        <NavItem>
          <NavLink  style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", 
          fontSize: "16px", padding: "15px 10px", width: "160px"}}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            <center>Text</center>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", 
          fontSize: "16px", padding: "15px 10px", width: "160px"}}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
            <center>User</center>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", 
          fontSize: "16px", padding: "15px 10px", width: "160px"}}
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}>
            <center>Keyword</center>
          </NavLink>
        </NavItem>
        
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Form>
                <FormGroup className="mt-2">
                <Input type="input" name="text" id="exampleText" 
                style={{ backgroundColor: "black", opacity: "0.5    ", color: "white", borderRadius: "10px", padding: "10px"}}/>
                </FormGroup>  
                </Form>     
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
            <Form>
                <FormGroup className="mt-2">
                <Input type="input" name="text" id="exampleText" />
                </FormGroup>  
                </Form>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
        <Row>
            <Col sm="12">
            <Form>
                <FormGroup className="mt-2">
                <Input type="input" name="text" id="exampleText" />
                </FormGroup>  
                </Form>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      </Col>
      </Row>
      <Col md="3"></Col>



        <Row className="d-lg-none">

      <Col xs="1" sm="2" className="d-lg-none "></Col>
      <Col xs="10" sm="8" className="mt-3 d-lg-none "  style = {{ border: "3px solid", borderRadius: "20px ", backgroundColor: "#0198E1"}}>
      <Nav tabs className="mt-3">
        <NavItem style= {{ borderTopLeftRadius: "10px solid", borderTopRightRadius: "10px solid"}}>
          <NavLink style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px"}}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            Text
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px", color: "#ffffff"}}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
            User
          </NavLink>
        </NavItem>
        <NavItem style= {{ borderTopLeftRadius: "10px solid", borderTopRightRadius: "10px solid"}}>
          <NavLink style = {{ borderTopLeftRadius: "10px",  borderTopRightRadius: "10px"}}
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}>
            Keyword
          </NavLink>
        </NavItem>
        
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Form>
                <FormGroup className="mt-2">
                <Input type="input" name="text" id="exampleText" />
                </FormGroup>  
                </Form>     
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
            <Form>
                <FormGroup className="mt-2">
                <Input type="input" name="text" id="exampleText" />
                </FormGroup>  
                </Form> 
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
        <Row>
            <Col sm="12">
            <Form>
                <FormGroup className="mt-2">
                <Input type="input" name="text" id="exampleText" />
                </FormGroup>  
                </Form> 
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      </Col>
      <Col xs="1" sm="2" className="d-lg-none "></Col>
      </Row>

      </div>
  );
}

export default SearchTabs;