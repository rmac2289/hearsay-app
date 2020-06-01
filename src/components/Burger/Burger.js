
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Burger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import TokenService from '../../services/token-service';

// hamburger nav component for screens smaller than 520px in width //
class Burger extends Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
      };
    };
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        sessionStorage.removeItem('username');
        this.forceUpdate();
    };
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    };
    
    handleLinkClick() {
      this.setState({menuOpen: false});
    };
    
    render(){
      const styles= 
        {
          container:{
            position: 'absolute',
            top: 0,
            left: 0,
            minHeight: 40,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            alignItems:'center',
            background: 'black',
            width: '100%',
            color: 'white',
            fontFamily:'Sacramento, cursive',
          },
          logo: {
            margin: '0 auto',
            fontFamily: 'Sacramento, cursive',
            fontSize: 22,
            fontWeight: 700
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '50px',
            filter: this.state.menuOpen ? 'blur(2px)':null,
            transition: 'filter 0.5s ease',
          },
        };
      const menu = !sessionStorage.getItem('username') ? ['Login','Register','Reviews','Forum', 'Home']:['Logout','Reviews', 'Forum', 'Home'];
      const menuItems = menu.map((val,index)=>{
        return (
          <MenuItem 
            route={val === 'Logout' || val === 'Home' ? '/':val}
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={val === 'Logout' ? this.handleLogoutClick : ()=>{this.handleLinkClick();}}>{val}</MenuItem>)
      });
      
      return(
        <div className="burgerDiv">
          <div style={styles.container}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
            <div style={styles.logo}>hearsay</div>
            <FontAwesomeIcon id="bullhorn" icon={faBullhorn}/>
          </div>
          <Menu open={this.state.menuOpen}>
            {menuItems}
          </Menu>
          <div style={styles.body}>
          </div>
        </div>
      );
    };
  };
  
  
  class MenuItem extends Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      };
    };
    
    handleHover = () => {
      this.setState({hover:!this.state.hover});
    };
    
    render(){
      const styles={
        container: {
          opacity: 0,
          animation: '1s appear forwards',
          animationDelay:this.props.delay,
          paddingBottom: 8,
        },
        menuItem:{
          fontFamily:`'Roboto', sans-serif`,
          fontSize: '1.2rem',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          color: this.state.hover? 'gray':'#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay:this.props.delay,
  
        },
        line: {
          width: '90%',
          height: '1px',
          background: 'gray',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay:this.props.delay,
          
        }
      };
      return(
        <div style={styles.container}>
          <Link 
            className="burgerLink"
            to={this.props.route}
            style={styles.menuItem} 
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}  
          </Link>
        <div style={styles.line}/>
      </div>  
      );
    };
  };
  

  class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      };
    };
      
    UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      };
    };
    
    render(){
      const styles={
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: this.state.open ? '100%': 0,
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          background: 'black',
          opacity: 0.95,
          color: '#fafafa',
          transition: 'height 0.3s ease',
          zIndex: 2,
        },
        menuList: {
          paddingTop: '3rem',
        }
      }
      return(
        <div style={styles.container}>
          {
            this.state.open?
              <div style={styles.menuList}>
                {this.props.children}
              </div>:null
          }
        </div>
      );
    };
  };
  
  class MenuButton extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
        color: this.props.color? this.props.color:'black',
      };
    };
  
    UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      };
    };
    
    handleClick(){
    this.setState({open:!this.state.open});
    };
    
    render(){
      const styles = {
        container: {
          height: '32px',
          width: '32px',
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '4px',
        },
        line: {
          height: '2px',
          width: '20px',
          background: this.state.color,
          transition: 'all 0.2s ease',
        },
        lineTop: {
          transform: this.state.open ? 'rotate(45deg)':'none',
          transformOrigin: 'top left',
          marginBottom: '5px',
        },
        lineMiddle: {
          opacity: this.state.open ? 0: 1,
          transform: this.state.open ? 'translateX(-16px)':'none',
        },
        lineBottom: {
          transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
          transformOrigin: 'top left',
          marginTop: '5px',
        },       
      };
      return(
        <div style={styles.container} 
          onClick={this.props.onClick ? this.props.onClick: 
            ()=> {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
      );
    };
  };
  

  export default Burger;
  

