<template>
    <div style="position:absolute; width: 100%; height:100%; top:0; left:0; z-index:10000; background-color:#0e0e0e">
        <div id="loading-wrapper">
            <div id="loading-text">
                <img src="@/assets/logo.png" />
            </div>
            <div id="loading-content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loader",
    }
</script>

<style>
  #loading-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  #loading-text {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #f96332;
    width: 100px;
    height: 30px;
    margin: -7px 0 0 -45px;
    text-align: center;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 20px;
  }
  #loading-content {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 170px;
    height: 170px;
    margin: -85px 0 0 -85px;
    border: 3px solid #F00;
  }
  #loading-content {
    border: 3px solid transparent;
    border-top-color: #f96332;
    border-bottom-color: #f96332;
    border-radius: 50%;
    -webkit-animation: loader 2s linear infinite;
    -moz-animation: loader 2s linear infinite;
    -o-animation: loader 2s linear infinite;
    animation: loader 2s linear infinite;
  }
  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
