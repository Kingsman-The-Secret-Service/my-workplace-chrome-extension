import React from "react";
import { Layout } from "antd";
import { MyHeader, MyBreadcrumb, MySider, MyFooter } from "../../layout";

const { Content } = Layout;

class Home extends React.Component {
  	render() {
		return (
			<Layout>
				<MySider />
				<Layout  style={{ minHeight: "100vh" }}>
					<MyHeader />
					<Content style={{ margin: "0 16px" }}>
						<MyBreadcrumb />
						<div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
							Bill is a cat.
						</div>
					</Content>
					<MyFooter />
				</Layout>
			</Layout>
		);
  	}
}

export default Home;