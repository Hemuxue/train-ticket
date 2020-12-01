import React, {Component, lazy, Suspense} from 'react';


const About = lazy(() => import(/*webpackChunkName:"about"*/'./About'));

// errorBoundary 可以捕获 import 加载错误
// 利用了componentDidCatch 生命周期方法
export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {

  state = {
    isError: false,
    errorTimes: 0
  }
  
  static getDerivedStateFromError(props: any) {
    return {
      isError: true
    }
  }


  render() {
    if (this.state.isError) {
      console.log('error render')
      return (<div>is Error; {this.state.errorTimes}</div>)
    } else {
      console.log('about')
      return (
        <div>
          <Suspense fallback={<div>loading</div>}>
            <About/>
          </Suspense>
        </div>
      );
    }
    
  }
}

