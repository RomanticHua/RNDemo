package com.rndemo;


import android.widget.ImageView;

//import com.bumptech.glide.Glide;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class ImageViewManager extends SimpleViewManager<ImageView> {

    private ThemedReactContext mContext;
    private static final String URL_VIEW_MANAGER_NAME = "UrlImageView";

    @Override
    public String getName() {
        return URL_VIEW_MANAGER_NAME;
    }

    /**
     * 此处创建View实例，并返回
     *
     * @param reactContext
     * @return
     */
    @Override
    protected ImageView createViewInstance(ThemedReactContext reactContext) {
        this.mContext = reactContext;
        return new ImageView(reactContext);
    }

    @ReactProp(name = "url")
    public void setImageSrc(final ImageView image, String url) {
        // 加载url对应的图片
//        Glide.with(mContext).load(url).into(image);
    }
}
