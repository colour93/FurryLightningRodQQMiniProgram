<view class="container">
    <view>
        <h1 class="display-3 text-center">避雷针\n</h1>
        <h3 class="lead text-center">约稿避雷辅助工具\n</h3>
    </view>
    <view class="searchBox" style="display:{{searchBoxDisplay}}">
        <view class="barx">
            <input
                class="searchBar"
                type="number"
                placeholder="  在此键入QQ..."
                maxlength="12"
                confirm-type="查询"
                bindinput="targetQQInput"
                value="{{r_QQ}}"
            />
            <button type="search" bindtap="searchBtnClick">查询</button>
        </view>
        <view class="result" style="display:{{result_safe_display}}">
            <view class="alert alert-success" role="alert">
                <text class="alert-heading">查无此人 \n</text>
                <text>该QQ号没有威胁或本站尚未收录，请谨慎操作。 \n</text>
            </view>
        </view>
        <view class="result" style="display:{{result_warning_display}}">
            <view class="alert alert-warning" role="alert">
                <text class="alert-heading">{{r_name}} \n</text>
                <text>QQ: {{r_QQ}} \n</text>
                <text>严重等级: {{r_level}} \n</text>
                <text>录入日期: {{r_addDate}} \n</text>
                <text>原因: {{r_reason}} \n</text>
            </view>
        </view>
        <view class="result" style="display:{{result_danger_display}}">
            <view class="alert alert-danger" role="alert">
                <text class="alert-heading">{{r_name}} \n</text>
                <text>QQ: {{r_QQ}} \n</text>
                <text>严重等级: {{r_level}} \n</text>
                <text>录入日期: {{r_addDate}} \n</text>
                <text>原因: {{r_reason}} \n</text>
            </view>
        </view>
        <view class="resultShare">
            <button
                type="outline-primary"
                open-type="share"
                share-mode="recentContacts"
                style="display: {{shareBtnDisplay}}"
            >发给好友，避免踩雷</button>
        </view>
    </view>
    <view class="permissionRequest" style="display:{{permissionRequestDisplay}}">
        <view class="alert alert-primary" role="alert">
            <text class="alert-heading">信息 \n</text>
            <text>如欲使用查询功能，请先允许避雷针获取被查询者QQ号码</text>
            <button
                class="permissionRequestBtn"
                type="primary"
                bindtap="permissionRequestBtnClick"
            >授权
            </button>
        </view>
    </view>
</view>