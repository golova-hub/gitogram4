<template>
  <div class="slider-item">
    <div class="slide-head">
      <progress-bar></progress-bar>
      <div class="slide-container">
        <post-user-profile :postAvatar="postAvatar"
            :postUsername="postUsername"></post-user-profile>
      </div>
    </div>
    <div class="slide-body">
      <div class="slide-container">
        <div class="slider-content">
          <div class="slider-body-img">
            <img src="https://picsum.photos/300/300" alt="Картинка" />
          </div>
          <div class="slider-text">
            <p><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
            <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
            <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
            <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <div class="slide-container">
        <btn-main :text="sliderBtnText"></btn-main>
      </div>
    </div>
  </div>
</template>

<script>
import BtnMain from '../btnMain/BtnMain.vue'
import PostUserProfile from '../postUserProfile/PostUserProfile.vue'
import { ProgressBar } from '../progressBar'

export default {
  name: 'SliderItem',
  components: {
    ProgressBar,
    PostUserProfile,
    BtnMain
  },
  data () {
    return {
      postAvatar: 'https://picsum.photos/300/300',
      postUsername: 'joshua_l',
      sliderBtnText: 'Follow'
    }
  }
}
</script>

<style lang="scss" scoped src="./SliderItem.scss"></style>
