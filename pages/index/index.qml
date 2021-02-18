<view class="container">
  <view class="intro">
    <text class="header">避雷针\n</text>
    <text class="heading">约稿避雷辅助工具\n</text>
    <!-- 登录后展示的用户信息 -->
    <view class="userInfo" style="display: {{userInfoDisplay}}">
      <view class="userInfoAvatar">
        <image class="userAvatar" src="{{userInfo.avatarUrl}}"></image>
      </view>
      <view class="welcome">
        <text class="userNick">{{nickNameDisplay}}\n</text>
        <text class="groupName">内测成员\n</text>
      </view>
      <view class="userControll">
        <button class="bindAccount" type="primary" bindtap="goToBindOpenid">绑定账号</button>
        <navigator url="/pages/profile/profile" open-type="switchTab">
          <button class="userSpace" type="primary" open-type="auth">个人中心</button>
        </navigator>
      </view>
    </view>
    <!-- 未登录时显示的登录控件 -->
    <view class="userInfo" style="display: {{userLoginDisplay}}">
      <view class="welcome">
        <text>您好，请登录</text>
      </view>
      <view class="userControll">
        <button
          class="btn-primary userLogin"
          type="primary"
          qq:if="{{canIUse}}"
          open-type="getUserInfo"
          bindgetuserinfo="bindGetUserInfo"
        >一键登录</button>
      </view>
    </view>
  </view>
  <view class="alert alert-primary">
    <text class="alert-heading">信息\n</text>
    <text class="alert-text">本工具主要功能是尽可能地减少甚至避免甲乙双方的各类损失，通过举报、审核、查询等的方式，尽可能地建设成为一个完善、数据量足够的黑名单系统，为圈子发展贡献一份力！\n</text>
    <!-- <text class="alert-text strong">如果您需要举报，请先登录。\n</text> -->
    <text class="alert-text strong">举报功能正在完善，敬请期待，可以点击下方私聊举报临时进行举报操作。\n</text>
  </view>
  <view>
    <!-- <button class="jumpToReport" type="warn">进入举报页面</button> -->
    <button
      class="jumpToReport"
      type="warn"
      open-type="addFriend"
      open-id="FEF397CC91C2E5C102D81187A75373FC"
    >临时举报</button>
    <navigator url="/pages/search/search" open-type="switchTab">
      <button class="jumpToReport" type="primary">进入查询页面</button>
    </navigator>
  </view>
</view>
