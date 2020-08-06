import React, { PureComponent } from "react"

import {StoreContext} from "./context";

// 连接组件和store，减少重复代码
export function connect(mapStateToProps, mapDispatchToProps) {
  // 将 store 中的 state对象 与 dispatch方法 通过 props 传递给所需组件
  return function EnhanceHOC(WrappedComponent) {
    class MapComponent extends PureComponent {
      constructor(props, context) {
        super(props);

        this.state = {
          // storeState 保存的是传入组件所需的 store 中的状态
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount() {
        // 更新 storeState，执行 render 函数
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrappedComponent {...this.props}
                                 {...this.state.storeState}
                                 {...mapDispatchToProps(this.context.dispatch)}/>
               
      }
    }

    MapComponent.contextType = StoreContext;

    return MapComponent;
  }
}