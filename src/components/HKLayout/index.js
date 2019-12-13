import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
class Index extends Component {
    state={
        selectedTab : 'blueTab'
    }
    onPress(){}
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#c01815"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<i className="iconfont icon-ind"></i>
                        }
                        selectedIcon={<i className="iconfont icon-ind"></i>
                        }
                        selected={this.props.match.url === '/'}
                        onPress={() => {
                           this.props.history.push("/")
                        }}
                    >
                        {this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-findHouse"></i>
                        }
                        selectedIcon={<i className="iconfont icon-findHouse"></i>
                        }
                        title="找房"
                        key="list"
                        selected={this.props.match.url === '/list'}
                        onPress={() => {
                            this.props.history.push("/list");
                        }}
                    >
                        {this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-infom"></i>
                    }
                    selectedIcon={<i className="iconfont icon-infom"></i>
                    }
                        title="资讯"
                        key="news"
                        selected={this.props.match.url === '/news'}
                        onPress={() => {
                          this.props.history.push("/news")
                        }}
                    >
                        {this.props.children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-myinfo"></i>}
                        selectedIcon={<i className="iconfont icon-myinfo"></i>}
                        title="我的"
                        key="profile"
                        selected={this.props.match.url === '/profile'}
                        onPress={() => {
                           this.props.history.push("/profile")
                        }}
                    >
                        {this.props.children}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
export default withRouter(Index)