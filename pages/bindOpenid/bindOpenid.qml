<view class="container">
<view class="req">
    <view class="section">
        <text for="username">用户名</text>
        <input
            id="username"
            placeholder="用户名"
            bindinput="usernameInput"
        />
    </view>
    <view class="section">
        <text for="password">密码</text>
        <input
            id="password"
            placeholder="密码"
            password="true"
            bindinput="passwordInput"
        />
    </view>
    <button
        bindtap="bindOpenidBtnClick"
        type="primary"
    >绑定</button>
</view>
<!-- <view class="result" style="display:{{result_display}}">
    <text>绑定信息： \n</text>
    <text>昵称：{{usernick}} \n</text>
    <text>用户名：{{username}} \n</text>
</view> -->
</view>