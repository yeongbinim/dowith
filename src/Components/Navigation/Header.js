import React from "react";
import Sidebar from "react-sidebar";
import Nav from "Components/Navigation/Nav";
// import Sidebar from "./Sidebar";
import MenuButton from "Components/Navigation/MenuButton";

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
		<>
			<Sidebar
				sidebar={<Nav user={this.props.user} onClick={()=>this.onSetSidebarOpen(false)}/>}
				open={this.state.sidebarOpen}
				onSetOpen={this.onSetSidebarOpen}
				styles={{ sidebar: { background: "white",height:"100%", zIndex:"3"},root:{top:"-6rem"},overlay: {zIndex: "2" }}}
			><MenuButton onClick={()=>this.onSetSidebarOpen(true)}/></Sidebar>
	  </>
    );
  }
}

// const Header = () => <Sidebar width={800} height={"100vh"}><Nav/></Sidebar>

export default Header;