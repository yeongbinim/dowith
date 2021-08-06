import React from "react";
import Sidebar from "react-sidebar";
import Nav from "Components/Nav";
import MenuButton from "Components/MenuButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  onSetSidebarClose(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
		<div>
			<Sidebar
				sidebar={<Nav onClick={()=>this.onSetSidebarOpen(false)}/>}
				open={this.state.sidebarOpen}
				onSetOpen={this.onSetSidebarOpen}
				styles={{ sidebar: { background: "white" } }}
			><MenuButton onClick={()=>this.onSetSidebarOpen(true)}/></Sidebar>
			<div style={{width:"100%",height:"5rem"}}></div>
	  	</div>
    );
  }
}

export default Header;