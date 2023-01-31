import React, { Component } from 'react'
import NewsCard from './NewsCard'
import Loading from './Loading';
export default class NewsItem extends Component {
    constructor(){
        super()
        this.state={
            article:[],
            page:1,
            loading:false,
            totalArticles:1,
        };
    }
    async componentDidMount(){
        let url=`https://newsdata.io/api/1/news?apikey=pub_160495889c8111b1c32fa776c57588b46d276&country=${this.props.country}`;
        //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b9f878f448a94b789224aa1f10e01640&page=1`;
        this.setState({loading:true})
        let data=await fetch(url);
        let res= await data.json();
        console.log(typeof(res));
        
        this.setState({
            article:res.articles,
            totalArticles:res.totalResults,
            loading:false,
        })
       
    }
    handlerNext=async()=>{
        console.log("next")
        if(!(this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b9f878f448a94b789224aa1f10e01640&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b9f878f448a94b789224aa1f10e01640&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let res= await data.json();
        console.log(typeof(res));
        this.setState({
            article:res.articles,
            page:this.state.page+1,
            loading:false,
        })
    }
    }
    handlerPrev=async()=>{
        console.log("prev")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b9f878f448a94b789224aa1f10e01640&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);

        let res= await data.json();
        console.log(typeof(res));
        this.setState({
            article:res.articles,
            page:this.state.page-1,
            loading:false,
        })
    }
    render() {
        return (
            <div className="container my-3">
                {this.state.loading &&<Loading></Loading>}
                <div className="row my-2-2">
                    {!this.state.loading &&this.state.article?.map((element)=>{
                        return<div className='col-md-4' key={element.url}>
                        <NewsCard title={element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0.40):""} imgUrl={element.urlToImage?element.urlToImage:""} readUrl={element.url} ></NewsCard>
                    </div>
                    })};
                </div>
                <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlerPrev}> &laquo; Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handlerNext}>Next &raquo;</button>
                </div>
                
            </div>
        )
    }
}
