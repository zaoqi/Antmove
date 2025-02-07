module.exports = {
    "descObject": {
        "movable-view": {
            "name": "可移动的视图容器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html",
                "alipay": "https://docs.alipay.com/mini/component/movable-view"
            },
            "desc": "在页面中可以拖拽滑动。movable-view必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。",
            "props": {
                "direction": {
                    "type": 7,
                    "status": 0,
                    "desc": "movable-view的移动方向，属性值有all、vertical、horizontal、none"
                },
                "inertia": {
                    "type": 0,
                    "status": 2,
                    "desc": "movable-view是否带有惯性"
                },
                "out-of-bounds": {
                    "type": 0,
                    "status": 2,
                    "desc": "超过可移动区域后，movable-view是否还可以移动"
                },
                "x": {
                    "type": 7,
                    "status": 0,
                    "desc": "定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画"
                },
                "y": {
                    "type": 7,
                    "status": 0,
                    "desc": "定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画"
                },
                "damping": {
                    "type": 0,
                    "status": 2,
                    "desc": "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
                },
                "friction": {
                    "type": 0,
                    "status": 2,
                    "desc": "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
                },
                "disabled": { "type": 7, "status": 0, "desc": "是否禁用" },
                "scale": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否支持双指缩放，默认缩放手势生效区域是在movable-view内"
                },
                "scale-min": {
                    "type": 0,
                    "status": 2,
                    "desc": "定义缩放倍数最小值"
                },
                "scale-max": {
                    "type": 0,
                    "status": 2,
                    "desc": "定义缩放倍数最大值"
                },
                "scale-value": {
                    "type": 0,
                    "status": 2,
                    "desc": "定义缩放倍数，取值范围为 0.5 - 10"
                },
                "animation": { "type": 0, "status": 2, "desc": "是否使用动画" },
                "bindchange": {
                    "type": 1,
                    "status": 0,
                    "desc": "拖动过程中触发的事件，event.detail = {x, y, source}",
                    "key": "onChange"
                },
                "bindscale": {
                    "type": 0,
                    "status": 2,
                    "desc": "缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持"
                },
                "htouchmove": {
                    "type": 0,
                    "status": 2,
                    "desc": "初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch"
                },
                "vtouchmove": {
                    "type": 0,
                    "status": 2,
                    "desc": "初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch"
                }
            }
        },
        "cover-view": {
            "name": "覆盖在原生组件之上的文本视图。",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html",
                "alipay": "https://docs.alipay.com/mini/component/cover-view"
            },
            "desc": "可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。",
            "props": {
                "scroll-top": {
                    "type": 0,
                    "status": 2,
                    "desc": "设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                }
            }
        },
        "scroll-view": {
            "name": "可滚动视图区域",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html",
                "alipay": "https://docs.alipay.com/mini/component/scroll-view"
            },
            "desc": "使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。",
            "props": {
                "scroll-x": { "type": 7, "status": 0, "desc": "允许横向滚动" },
                "scroll-y": { "type": 7, "status": 0, "desc": "允许纵向滚动" },
                "scroll-top": {
                    "type": 3,
                    "status": 1,
                    "desc": "设置竖向滚动条位置",
                    "msg": "支付宝小程序只支持number类型"
                },
                "scroll-left": {
                    "type": 3,
                    "status": 1,
                    "desc": "设置横向滚动条位置",
                    "msg": "支付宝小程序只支持number类型"
                },
                "scroll-into-view": {
                    "type": 7,
                    "status": 0,
                    "desc": "值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素"
                },
                "scroll-with-animation": {
                    "type": 7,
                    "status": 0,
                    "desc": "在设置滚动条位置时使用动画过渡"
                },
                "enable-back-to-top": {
                    "type": 7,
                    "status": 0,
                    "desc": "当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向"
                },
                "bindscrolltoupper": {
                    "type": 1,
                    "status": 0,
                    "desc": "滚动到顶部/左边时触发",
                    "key": "onScrollToUpper",
                    "params": {
                        "scrolltoup": {
                            "type": 1,
                            "desc": "diff",
                            "key": "scrollToUp"
                        }
                    }
                },
                "bindscrolltolower": {
                    "type": 1,
                    "status": 0,
                    "desc": "滚动到底部/右边时触发",
                    "key": "onScrollToLower",
                    "params": {
                        "scrolltolower": {
                            "type": 1,
                            "desc": "diff",
                            "key": "scrollToLower"
                        }
                    }
                },
                "bindscroll": {
                    "type": 1,
                    "status": 0,
                    "desc": "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}",
                    "key": "onScrollToUpper",
                    "params": {
                        "deltaX": { "type": 0, "status": 2 },
                        "deltaY": { "type": 0, "status": 2 }
                    }
                }
            }
        },
        "swiper": {
            "name": "滑块视图容器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html",
                "alipay": "https://docs.alipay.com/mini/component/swiper"
            },
            "desc": "其中只可放置swiper-item组件，否则会导致未定义的行为。",
            "props": {
                "current-item-id": {
                    "type": 0,
                    "status": 2,
                    "desc": "missing"
                },
                "indicator-dots": {
                    "type": 7,
                    "status": 0,
                    "desc": "是否显示面板指示点"
                },
                "indicator-color": {
                    "type": 7,
                    "status": 0,
                    "desc": "指示点颜色"
                },
                "indicator-active-color": {
                    "type": 7,
                    "status": 0,
                    "desc": "当前选中的指示点颜色"
                },
                "autoplay": { "type": 7, "status": 0, "desc": "是否自动切换" },
                "current": {
                    "type": 7,
                    "status": 0,
                    "desc": "当前所在滑块的 index"
                },
                "interval": {
                    "type": 7,
                    "status": 0,
                    "desc": "自动切换时间间隔"
                },
                "duration": { "type": 7, "status": 0, "desc": "滑动动画时长" },
                "circular": {
                    "type": 7,
                    "status": 0,
                    "desc": "是否启用无限滑动"
                },
                "vertical": {
                    "type": 7,
                    "status": 0,
                    "desc": "滑动方向是否为纵向"
                },
                "previous-margin": {
                    "type": 7,
                    "status": 0,
                    "desc": "前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值"
                },
                "next-margin": {
                    "type": 7,
                    "status": 0,
                    "desc": "后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值"
                },
                "display-multiple-items": {
                    "type": 0,
                    "status": 2,
                    "desc": "同时显示的滑块数量"
                },
                "skip-hidden-item-layout": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
                },
                "easing-function": {
                    "type": 0,
                    "status": 2,
                    "desc": "指定 swiper 切换缓动动画类型"
                },
                "bindchange": {
                    "type": 1,
                    "status": 1,
                    "desc": "current 改变时会触发 change 事件，event.detail = {current, source}",
                    "key": "onChange",
                    "params": {
                        "currentItemId": {
                            "type": 0,
                            "status": 2,
                            "desc": "missing"
                        }
                    }
                },
                "bindtransition": {
                    "type": 0,
                    "status": 2,
                    "desc": "swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}"
                },
                "bindanimationfinish": {
                    "type": 0,
                    "status": 2,
                    "desc": "动画结束时会触发 animationfinish 事件，event.detail 同上"
                }
            }
        },
        "view": {
            "name": "视图容器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html",
                "alipay": "https://docs.alipay.com/mini/component/view"
            },
            "desc": "视图容器",
            "props": {
                "hover-class": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
                },
                "hover-stop-propagation": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定是否阻止本节点的祖先节点出现点击态"
                },
                "aria-role": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（角色）标识元素的作用"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                },
                "hover-start-time": {
                    "type": 4,
                    "status": 0,
                    "desc": "按住后多久出现点击态，单位毫秒.",
                    "msg": "微信默认值40，支付宝无"
                },
                "hover-stay-time": {
                    "type": 4,
                    "status": 0,
                    "desc": "手指松开后点击态保留时间，单位毫秒.",
                    "msg": "微信默认值500，支付宝无"
                }
            }
        },
        "icon": {
            "name": "图标",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html",
                "alipay": "https://docs.alipay.com/mini/component/icon"
            },
            "desc": "组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。",
            "props": {
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                },
                "color": {
                    "type": 7,
                    "status": 0,
                    "desc": "icon的颜色，同css的color"
                },
                "type": {
                    "type": 7,
                    "status": 0,
                    "desc": "icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear"
                }
            }
        },
        "progress": {
            "name": "进度条",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html",
                "alipay": "https://docs.alipay.com/mini/component/progress"
            },
            "desc": "组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。",
            "props": {
                "percent": { "type": 7, "status": 0, "desc": "百分比0~100" },
                "show-info": {
                    "type": 7,
                    "status": 0,
                    "desc": "在进度条右侧显示百分比"
                },
                "border-radius": { "type": 0, "status": 2, "desc": "圆角大小" },
                "font-size": {
                    "type": 0,
                    "status": 2,
                    "desc": "右侧百分比字体大小"
                },
                "color": {
                    "type": 3,
                    "status": 0,
                    "desc": "进度条颜色",
                    "key": "active-color"
                },
                "activeColor": {
                    "type": 1,
                    "status": 0,
                    "desc": "已选择的进度条的颜色",
                    "key": "active-color"
                },
                "backgroundColor": {
                    "type": 1,
                    "status": 0,
                    "desc": "未选择的进度条的颜色",
                    "key": "background-color"
                },
                "active": {
                    "type": 7,
                    "status": 0,
                    "desc": "进度条从左往右的动画"
                },
                "active-mode": {
                    "type": 0,
                    "status": 2,
                    "desc": "backwards: 动画从头播；forwards：动画从上次结束点接着播"
                },
                "bindactiveend": {
                    "type": 0,
                    "status": 2,
                    "desc": "动画完成事件"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                }
            }
        },
        "rich-text": {
            "name": "富文本",
            "type": 5,
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html",
                "alipay": "https://docs.alipay.com/mini/component/rich-text"
            },
            "desc": "富文本。",
            "tagName": "custom-rich-text",
            "path": "/__antmove/__component/custom-rich-text/custom-rich-text",
            "props": {
                "nodes": {
                    "type": 3,
                    "status": 1,
                    "desc": "节点列表/HTML String",
                    "msg": "支付宝小程序只支持Array类型"
                },
                "space": { "type": 0, "status": 2, "desc": "显示连续空格" }
            }
        },
        "text": {
            "name": "文本",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html",
                "alipay": "https://docs.alipay.com/mini/component/text"
            },
            "desc": "文本。",
            "props": {
                "selectable": {
                    "type": 7,
                    "status": 0,
                    "desc": "文本是否可选"
                },
                "space": { "type": 7, "status": 0, "desc": "显示连续空格" },
                "decode": { "type": 7, "status": 0, "desc": "是否解码" },
                "hidden": { "type": 0, "status": 2, "desc": "隐藏该组件" }
            }
        },
        "checkbox-group": {
            "name": "多项选择器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html",
                "alipay": "https://docs.alipay.com/mini/component/checkbox-group"
            },
            "desc": "多项选择器，内部由多个checkbox组成。",
            "props": {
                "bindchange": {
                    "type": 1,
                    "status": 0,
                    "desc": "checkbox-group中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}",
                    "key": "onChange"
                }
            }
        },
        "form": {
            "name": "表单",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html",
                "alipay": "https://docs.alipay.com/mini/component/form"
            },
            "desc": "将组件内的用户输入的switch input checkbox slider radio picker 提交。当点击 form 表单中 form-type 为 submit 的 button 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。",
            "props": {
                "report-submit": {
                    "type": 7,
                    "status": 0,
                    "desc": "是否返回 formId 用于发送模板消息"
                },
                "bindsubmit": {
                    "type": 1,
                    "status": 0,
                    "desc": "携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}",
                    "key": "onSubmit"
                },
                "bindreset": {
                    "type": 1,
                    "status": 0,
                    "desc": "表单重置时会触发 reset 事件",
                    "key": "onReset"
                },
                "report-submit-timeout": {
                    "type": 0,
                    "status": 2,
                    "desc": "等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId"
                }
            }
        },
        "input": {
            "name": "输入框",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html",
                "alipay": "https://docs.alipay.com/mini/component/input"
            },
            "desc": "该组件是原生组件，使用时请注意相关限制",
            "props": {
                "value": { "type": 7, "status": 0, "desc": "输入框的初始内容" },
                "type": { "type": 7, "status": 0, "desc": "input 的类型" },
                "password": {
                    "type": 7,
                    "status": 0,
                    "desc": "是否是密码类型"
                },
                "placeholder": {
                    "type": 7,
                    "status": 0,
                    "desc": "输入框为空时占位符"
                },
                "placeholder-style": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定 placeholder 的样式"
                },
                "placeholder-class": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定 placeholder 的样式类"
                },
                "disabled": { "type": 7, "status": 0, "desc": "是否禁用" },
                "maxlength": {
                    "type": 7,
                    "status": 0,
                    "desc": "最大输入长度，设置为 -1 的时候不限制最大长度"
                },
                "cursor-spacing": {
                    "type": 0,
                    "status": 2,
                    "desc": "指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
                },
                "auto-focus": {
                    "type": 3,
                    "status": 0,
                    "desc": "(即将废弃，请直接使用 focus )自动聚焦，拉起键盘",
                    "key": "focus"
                },
                "focus": { "type": 7, "status": 0, "desc": "获取焦点" },
                "confirm-type": {
                    "type": 7,
                    "status": 0,
                    "desc": "设置键盘右下角按钮的文字，仅在type='text'时生效"
                },
                "confirm-hold": {
                    "type": 7,
                    "status": 0,
                    "desc": "点击键盘右下角按钮时是否保持键盘不收起"
                },
                "cursor": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定focus时的光标位置"
                },
                "selection-start": {
                    "type": 7,
                    "status": 0,
                    "desc": "光标起始位置，自动聚集时有效，需与selection-end搭配使用"
                },
                "selection-end": {
                    "type": 7,
                    "status": 0,
                    "desc": "光标结束位置，自动聚集时有效，需与selection-start搭配使用"
                },
                "adjust-position": {
                    "type": 0,
                    "status": 2,
                    "desc": "键盘弹起时，是否自动上推页面"
                },
                "bindinput": {
                    "type": 1,
                    "status": 0,
                    "desc": "键盘输入时触发",
                    "key": "onInput"
                },
                "bindfocus": {
                    "type": 1,
                    "status": 0,
                    "desc": "输入框聚焦时触发",
                    "key": "onFocus"
                },
                "bindblur": {
                    "type": 1,
                    "status": 0,
                    "desc": "输入框失去焦点时触发",
                    "key": "onBlur"
                },
                "bindconfirm": {
                    "type": 1,
                    "status": 0,
                    "desc": "点击完成按钮时触发",
                    "key": "onConfirm"
                },
                "bindkeyboardheightchange": {
                    "type": 0,
                    "status": 2,
                    "desc": "键盘高度发生变化的时候触发此事件"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                }
            }
        },
        "picker": {
            "name": "从底部弹起的滚动选择器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html",
                "alipay": "https://docs.alipay.com/mini/component/picker"
            },
            "desc": "从底部弹起的滚动选择器。",
            "props": {
                "mode": { "type": 7, "status": 0, "desc": "选择器类型" },
                "bindchange": {
                    "type": 1,
                    "status": 0,
                    "desc": "发生改变时触发",
                    "key": "onChange"
                },
                "bindcancel": {
                    "type": 0,
                    "status": 2,
                    "desc": "取消选择时触发"
                }
            }
        },
        "picker-view": {
            "name": "嵌入页面的滚动选择器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html",
                "alipay": "https://docs.alipay.com/mini/component/picker-view"
            },
            "desc": "其中只可放置 picker-view-column组件，其它节点不会显示。",
            "props": {
                "value": {
                    "type": 7,
                    "status": 0,
                    "desc": "数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。"
                },
                "indicator-style": {
                    "type": 7,
                    "status": 0,
                    "desc": "设置选择器中间选中框的样式"
                },
                "indicator-class": {
                    "type": 7,
                    "status": 0,
                    "desc": "设置选择器中间选中框的类名"
                },
                "mask-style": {
                    "type": 7,
                    "status": 0,
                    "desc": "设置蒙层的样式"
                },
                "mask-class": {
                    "type": 7,
                    "status": 0,
                    "desc": "设置蒙层的类名"
                },
                "bindchange": {
                    "type": 1,
                    "status": 0,
                    "desc": "滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）",
                    "key": "onChange"
                },
                "bindpickstart": {
                    "type": 0,
                    "status": 2,
                    "desc": "当滚动选择开始时候触发事件"
                },
                "bindpickend": {
                    "type": 0,
                    "status": 2,
                    "desc": "当滚动选择结束时候触发事件"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                }
            }
        },
        "radio": {
            "name": "单选项目",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html",
                "alipay": "https://docs.alipay.com/mini/component/radio"
            },
            "desc": "单选项目。",
            "props": {
                "value": {
                    "type": 7,
                    "status": 0,
                    "desc": "radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value"
                },
                "checked": { "type": 7, "status": 0, "desc": "当前是否选中" },
                "disabled": { "type": 7, "status": 0, "desc": "是否禁用" },
                "color": {
                    "type": 7,
                    "status": 0,
                    "desc": "radio的颜色，同css的color"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                }
            }
        },
        "slider": {
            "name": "滑动选择器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html",
                "alipay": "https://docs.alipay.com/mini/component/slider"
            },
            "desc": "滑动选择器。",
            "props": {
                "min": { "type": 7, "status": 0, "desc": "最小值" },
                "max": { "type": 7, "status": 0, "desc": "最大值" },
                "step": {
                    "type": 7,
                    "status": 0,
                    "desc": "步长，值必须大于 0，并可被(max - min)整除"
                },
                "disabled": { "type": 7, "status": 0, "desc": "是否禁用" },
                "value": { "type": 7, "status": 0, "desc": "当前取值" },
                "color": {
                    "type": 3,
                    "status": 0,
                    "desc": "背景条的颜色",
                    "key": "background-color"
                },
                "selected-color": {
                    "type": 3,
                    "status": 0,
                    "desc": "已选择的颜色",
                    "key": "active-color"
                },
                "show-value": {
                    "type": 7,
                    "status": 0,
                    "desc": "是否显示当前 value"
                },
                "bindchange": {
                    "type": 1,
                    "status": 0,
                    "desc": "完成一次拖动后触发的事件",
                    "key": "onChange"
                },
                "backgroundColor": {
                    "type": 1,
                    "status": 0,
                    "desc": "背景条的颜色",
                    "key": "background-color"
                },
                "activeColor": {
                    "type": 1,
                    "status": 0,
                    "desc": "已选择的颜色",
                    "key": "active-color"
                },
                "block-size": {
                    "type": 1,
                    "status": 0,
                    "desc": "滑块的大小，取值范围为 12 - 28",
                    "key": "handle-size"
                },
                "block-color": {
                    "type": 1,
                    "status": 0,
                    "desc": "滑块的颜色",
                    "key": "handle-color"
                },
                "bindchanging": {
                    "type": 1,
                    "status": 0,
                    "desc": "拖动过程中触发的事件",
                    "key": "onChanging"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                }
            }
        },
        "switch": {
            "name": "开关选择器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html",
                "alipay": "https://docs.alipay.com/mini/component/switch"
            },
            "desc": "开关选择器。",
            "props": {
                "checked": { "type": 7, "status": 0, "desc": "是否选中" },
                "disabled": { "type": 7, "status": 0, "desc": "是否禁用" },
                "bindchange": {
                    "type": 1,
                    "status": 0,
                    "desc": "checked 改变时触发 change 事件，event.detail={ value}",
                    "key": "onChange"
                },
                "type": {
                    "type": 0,
                    "status": 2,
                    "desc": "样式，有效值：switch, checkbox"
                },
                "color": {
                    "type": 7,
                    "status": 0,
                    "desc": "switch 的颜色，同 css 的 color"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                }
            }
        },
        "textarea": {
            "name": "多行输入框",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html",
                "alipay": "https://docs.alipay.com/mini/component/textarea"
            },
            "desc": "该组件是原生组件，使用时请注意相关限制。",
            "props": {
                "value": { "type": 7, "status": 0, "desc": "输入框的内容" },
                "placeholder": { "type": 7, "status": 0, "desc": "占位符" },
                "placeholder-style": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定 placeholder 的样式"
                },
                "placeholder-class": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定 placeholder 的样式类"
                },
                "disabled": { "type": 7, "status": 0, "desc": "是否禁用" },
                "maxlength": {
                    "type": 7,
                    "status": 0,
                    "desc": "最大长度，当设置为-1时不限制最大长度"
                },
                "auto-focus": { "type": 1, "status": 0, "desc": "focus" },
                "focus": { "type": 7, "status": 0, "desc": "获取焦点" },
                "auto-height": {
                    "type": 7,
                    "status": 0,
                    "desc": "是否自动增高，设置auto-height时，style.height不生效"
                },
                "fixed": {
                    "type": 0,
                    "status": 2,
                    "desc": "如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true"
                },
                "cursor-spacing": {
                    "type": 0,
                    "status": 2,
                    "desc": "指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离"
                },
                "cursor": {
                    "type": 0,
                    "status": 2,
                    "desc": "指定focus时的光标位置"
                },
                "show-confirm-bar": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否显示键盘上方带有”完成“按钮那一栏"
                },
                "selection-start": {
                    "type": 0,
                    "status": 2,
                    "desc": "光标起始位置，自动聚集时有效，需与selection-end搭配使用"
                },
                "selection-end": {
                    "type": 0,
                    "status": 2,
                    "desc": "光标结束位置，自动聚集时有效，需与selection-start搭配使用"
                },
                "adjust-position": {
                    "type": 0,
                    "status": 2,
                    "desc": "键盘弹起时，是否自动上推页面"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                },
                "bindlinechange": {
                    "type": 1,
                    "status": 0,
                    "desc": "onLineChange"
                },
                "bindfocus": {
                    "type": 1,
                    "status": 0,
                    "desc": "输入框聚焦时触发",
                    "key": "onFocus"
                },
                "bindblur": {
                    "type": 1,
                    "status": 0,
                    "desc": "输入框失去焦点时触发",
                    "key": "onBlur"
                },
                "bindconfirm": {
                    "type": 1,
                    "status": 0,
                    "desc": "点击完成时， 触发 confirm 事件，event.detail = {value: value}",
                    "key": "onConfirm"
                },
                "bindinput": {
                    "type": 1,
                    "status": 0,
                    "desc": "当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode 为键值，目前工具还不支持返回keyCode参数。bindinput 处理函数的返回值并不会反映到 textarea 上",
                    "key": "onInput"
                },
                "bindkeyboardheightchange": {
                    "type": 0,
                    "status": 2,
                    "desc": "键盘高度发生变化的时候触发此事件"
                }
            }
        },
        "button": {
            "type": 0,
            "name": "按钮",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html",
                "alipay": "https://docs.alipay.com/mini/component/button"
            },
            "desc": "按钮",
            "tagName": "btn",
            "path": "/__antmove/__component/btn/btn",
            "props": {
                "size": { "type": 7, "status": 0, "desc": "按钮的大小" },
                "type": { "type": 7, "status": 0, "desc": "按钮的样式类型" },
                "plain": {
                    "type": 7,
                    "status": 0,
                    "desc": "按钮是否镂空，背景色透明"
                },
                "disabled": { "type": 7, "status": 0, "desc": "是否禁用" },
                "loading": {
                    "type": 7,
                    "status": 0,
                    "desc": "名称前是否带 loading 图标"
                },
                "form-type": {
                    "type": 7,
                    "status": 0,
                    "desc": "用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件"
                },
                "open-type": {
                    "type": 3,
                    "status": 1,
                    "desc": "微信开放能力",
                    "props": {
                        "contact": {
                            "type": 0,
                            "status": 2,
                            "desc": "打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，具体说明"
                        },
                        "share": {
                            "type": 7,
                            "status": 0,
                            "desc": "触发用户转发，使用前建议先阅读使用指引"
                        },
                        "getPhoneNumber": {
                            "type": 0,
                            "status": 2,
                            "desc": "获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，具体说明"
                        },
                        "getUserInfo": {
                            "type": 0,
                            "status": 2,
                            "desc": "获取用户信息，可以从bindgetuserinfo回调中获取到用户信息"
                        },
                        "launchApp": {
                            "type": 0,
                            "status": 2,
                            "desc": "打开APP，可以通过app-parameter属性设定向APP传的参数具体说明"
                        },
                        "openSetting": {
                            "type": 0,
                            "status": 2,
                            "desc": "打开授权设置页"
                        },
                        "feedback": {
                            "type": 0,
                            "status": 2,
                            "desc": "打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容"
                        }
                    }
                },
                "hover-class": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定按钮按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
                },
                "hover-stop-propagation": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定是否阻止本节点的祖先节点出现点击态"
                },
                "hover-start-time": {
                    "type": 7,
                    "status": 0,
                    "desc": "按住后多久出现点击态，单位毫秒"
                },
                "hover-stay-time": {
                    "type": 7,
                    "status": 0,
                    "desc": "手指松开后点击态保留时间，单位毫秒"
                },
                "lang": {
                    "type": 0,
                    "status": 2,
                    "desc": "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。"
                },
                "session-from": {
                    "type": 0,
                    "status": 2,
                    "desc": "会话来源，open-type=\"contact\"时有效"
                },
                "send-message-title": {
                    "type": 0,
                    "status": 2,
                    "desc": "会话内消息卡片标题，open-type=\"contact\"时有效"
                },
                "send-message-path": {
                    "type": 0,
                    "status": 2,
                    "desc": "会话内消息卡片点击跳转小程序路径，open-type=\"contact\"时有效"
                },
                "send-message-img": {
                    "type": 0,
                    "status": 2,
                    "desc": "会话内消息卡片图片，open-type=\"contact\"时有效"
                },
                "app-parameter": {
                    "type": 7,
                    "status": 0,
                    "desc": "打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效"
                },
                "show-message-card": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，open-type=\"contact\"时有效"
                },
                "bindgetuserinfo": {
                    "type": 1,
                    "status": 0,
                    "desc": "用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type=\"getUserInfo\"时有效",
                    "key": "onGetuserInfo"
                },
                "bindcontact": {
                    "type": 0,
                    "status": 2,
                    "desc": "客服消息回调，open-type=\"contact\"时有效"
                },
                "bindgetphonenumber": {
                    "type": 1,
                    "status": 0,
                    "desc": "获取用户手机号回调，open-type=getPhoneNumber时有效",
                    "key": "onGetPhoneNumber"
                },
                "binderror": {
                    "type": 0,
                    "status": 2,
                    "desc": "当使用开放能力时，发生错误的回调，open-type=launchApp时有效"
                },
                "bindopensetting": {
                    "type": 1,
                    "status": 0,
                    "desc": "在打开授权设置页后回调，open-type=openSetting时有效",
                    "key": "onOpenSetting"
                },
                "bindlaunchapp": {
                    "type": 0,
                    "status": 2,
                    "desc": "打开 APP 成功的回调，open-type=launchApp时有效"
                },
                "catchtap": {
                    "type": 1,
                    "status": 0,
                    "desc": "diff",
                    "key": "catchTap"
                }
            }
        },
        "label": {
            "name": "表单组件标签",
            "url": {
                "wechat": "http://www.ionic.wang/weixin/component/label.html",
                "alipay": "https://docs.alipay.com/mini/component/label"
            },
            "desc": "用来改进表单组件的可用性。使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。",
            "props": {
                "for": { "type": 7, "status": 0, "desc": "绑定控件的 id" }
            },
            "type": 7,
            "status": 0
        },
        "checkbox": {
            "name": "多选项目",
            "url": {
                "wechat": "http://www.ionic.wang/weixin/component/checkbox.html",
                "alipay": "https://docs.alipay.com/mini/component/checkbox"
            },
            "desc": "多选项目",
            "props": {
                "value": {
                    "type": 7,
                    "status": 0,
                    "desc": "<checkbox/>标识，选中时触发<checkbox-group/>的 change 事件，并携带 <checkbox/> 的 value"
                },
                "disabled": { "type": 7, "status": 0, "desc": "是否禁用" },
                "checked": {
                    "type": 7,
                    "status": 0,
                    "desc": "当前是否选中，可用来设置默认选中"
                }
            },
            "type": 7,
            "status": 0
        },
        "navigator": {
            "name": "页面链接",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html",
                "alipay": "https://docs.alipay.com/mini/component/navigator"
            },
            "desc": "页面链接。",
            "props": {
                "target": {
                    "type": 0,
                    "status": 2,
                    "desc": "在哪个目标上发生跳转，默认当前小程序"
                },
                "url": {
                    "type": 7,
                    "status": 0,
                    "desc": "当前小程序内的跳转链接"
                },
                "delta": {
                    "type": 0,
                    "status": 2,
                    "desc": "当 open-type 为 'navigateBack' 时有效，表示回退的层数"
                },
                "app-id": {
                    "type": 0,
                    "status": 2,
                    "desc": "当target=\"miniProgram\"时有效，要打开的小程序 appId"
                },
                "path": {
                    "type": 0,
                    "status": 2,
                    "desc": "当target=\"miniProgram\"时有效，打开的页面路径，如果为空则打开首页"
                },
                "extra-data": {
                    "type": 0,
                    "status": 2,
                    "desc": "当target=\"miniProgram\"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据"
                },
                "version": {
                    "type": 0,
                    "status": 2,
                    "desc": "当target=\"miniProgram\"时有效，要打开的小程序版本"
                },
                "hover-class": {
                    "type": 7,
                    "status": 0,
                    "desc": "指定点击时的样式类，当hover-class=\"none\"时，没有点击态效果"
                },
                "hover-stop-propagation": {
                    "type": 0,
                    "status": 2,
                    "desc": "指定是否阻止本节点的祖先节点出现点击态"
                },
                "bindsuccess": {
                    "type": 0,
                    "status": 2,
                    "desc": "当target=\"miniProgram\"时有效，跳转小程序成功"
                },
                "bindfail": {
                    "type": 0,
                    "status": 2,
                    "desc": "当target=\"miniProgram\"时有效，跳转小程序失败"
                },
                "bindcomplete": {
                    "type": 0,
                    "status": 2,
                    "desc": "当target=\"miniProgram\"时有效，跳转小程序完成"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                },
                "hover-start-time": {
                    "type": 4,
                    "status": 0,
                    "desc": "按住后多久出现点击态，单位毫秒"
                },
                "hover-stay-time": {
                    "type": 4,
                    "status": 0,
                    "desc": "手指松开后点击态保留时间，单位毫秒"
                },
                "open-type": {
                    "props": {
                        "reLaunch": {
                            "type": 0,
                            "status": 2,
                            "desc": "对应 wx.reLaunch 的功能"
                        },
                        "exit": {
                            "type": 0,
                            "status": 2,
                            "desc": "退出小程序，target=\"miniProgram\"时生效"
                        }
                    }
                }
            }
        },
        "audio": {
            "name": "音频",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html",
                "alipay": "https://yuque.antfin-inc.com/amap-webx/api/inul90"
            },
            "desc": "1.6.0版本开始，该组件不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口",
            "props": {
                "id": {
                    "type": 7,
                    "status": 0,
                    "desc": "audio 组件的唯一标识符"
                },
                "src": {
                    "type": 7,
                    "status": 0,
                    "desc": "要播放音频的资源地址"
                },
                "loop": { "type": 7, "status": 0, "desc": "是否循环播放" },
                "controls": {
                    "type": 7,
                    "status": 0,
                    "desc": "是否显示默认控件"
                },
                "poster": {
                    "type": 7,
                    "status": 0,
                    "desc": "默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效"
                },
                "name": {
                    "type": 7,
                    "status": 0,
                    "desc": "默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效"
                },
                "author": {
                    "type": 7,
                    "status": 0,
                    "desc": "默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效"
                },
                "binderror": {
                    "type": 1,
                    "status": 0,
                    "desc": "当发生错误时触发 error 事件",
                    "key": "onError"
                },
                "bindplay": {
                    "type": 1,
                    "status": 0,
                    "desc": "当开始/继续播放时触发play事件",
                    "key": "onPlay"
                },
                "bindpause": {
                    "type": 1,
                    "status": 0,
                    "desc": "当暂停播放时触发 pause 事件",
                    "key": "onPause"
                },
                "bindtimeupdate": {
                    "type": 1,
                    "status": 0,
                    "desc": "当播放进度改变时触发",
                    "key": "onTimeUpdate"
                },
                "bindended": {
                    "type": 1,
                    "status": 0,
                    "desc": "当播放到末尾时触发 ended 事件",
                    "key": "onEnded"
                }
            }
        },
        "image": {
            "name": "图片",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html",
                "alipay": "https://docs.alipay.com/mini/component/image"
            },
            "desc": "支持JPG、PNG、SVG格式，2.3.0 起支持云文件ID。",
            "props": {
                "src": { "type": 7, "status": 0, "desc": "图片资源地址" },
                "mode": {
                    "type": 7,
                    "status": 0,
                    "desc": "图片裁剪、缩放的模式"
                },
                "lazy-load": {
                    "type": 7,
                    "status": 0,
                    "desc": "图片懒加载，在即将进入一定范围（上下三屏）时才开始加载"
                },
                "show-menu-by-longpress": {
                    "type": 0,
                    "status": 2,
                    "desc": "开启长按图片显示识别小程序码菜单"
                },
                "aria-label": {
                    "type": 0,
                    "status": 2,
                    "desc": "无障碍访问，（属性）元素的额外描述"
                },
                "binderror": {
                    "type": 1,
                    "status": 0,
                    "desc": "当错误发生时触发",
                    "key": "onError"
                },
                "bindload": {
                    "type": 1,
                    "status": 0,
                    "desc": "当图片载入完毕时触发",
                    "key": "onLoad"
                }
            }
        },
        "map": {
            "name": "地图",
            "type": 5,
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html",
                "alipay": "https://docs.alipay.com/mini/component/map"
            },
            "tagName": "custom-map",
            "path": "/__antmove/__component/custom-map/custom-map",
            "desc": "use custom map component instead default map component.",
            "props": {
                "longitude": { "type": 7, "status": 0, "desc": "中心经度" },
                "latitude": { "type": 7, "status": 0, "desc": "中心纬度" },
                "scale": { "type": 7, "status": 0, "desc": "缩放级别" },
                "markers": {
                    "name": "标记点",
                    "type": 5,
                    "status": 1,
                    "desc": "标记点用于在地图上显示标记的位置",
                    "props": {
                        "id": {
                            "type": 7,
                            "status": 0,
                            "desc": "marker 点击事件回调会返回此 id。建议为每个 marker 设置上 number 类型 id，保证更新 marker 时有更好的性能。"
                        },
                        "latitude": {
                            "type": 7,
                            "status": 0,
                            "desc": "浮点数，范围 -90 ~ 90"
                        },
                        "longitude": {
                            "type": 7,
                            "status": 0,
                            "desc": "浮点数，范围 -180 ~ 180"
                        },
                        "title": {
                            "type": 7,
                            "status": 0,
                            "desc": "点击时显示，callout存在时将被忽略"
                        },
                        "zIndex": {
                            "type": 0,
                            "status": 2,
                            "desc": "显示层级"
                        },
                        "iconPath": { "type": 7, "status": 0, "desc": null },
                        "rotate": {
                            "type": 7,
                            "status": 0,
                            "desc": "顺时针旋转的角度，范围 0 ~ 360，默认为 0"
                        },
                        "alpha": {
                            "type": 7,
                            "status": 0,
                            "desc": "默认 1，无透明，范围 0 ~ 1"
                        },
                        "width": {
                            "type": 7,
                            "status": 0,
                            "desc": "默认为图片实际宽度"
                        },
                        "height": {
                            "type": 7,
                            "status": 0,
                            "desc": "默认为图片实际高度"
                        },
                        "callout": {
                            "name": "自定义标记点上方的气泡窗口",
                            "desc": "支持的属性见下表，可识别换行符。",
                            "type": 5,
                            "status": "1",
                            "props": {
                                "content": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "文本"
                                },
                                "color": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "文本颜色"
                                },
                                "fontSize": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "文字大小"
                                },
                                "borderRadius": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "边框圆角"
                                },
                                "borderWidth": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "边框宽度"
                                },
                                "borderColor": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "边框颜色"
                                },
                                "bgColor": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "背景色"
                                },
                                "padding": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "文本边缘留白"
                                },
                                "display": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "BYCLICK':点击显示; 'ALWAYS':常显"
                                },
                                "textAlign": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "文本对齐方式"
                                }
                            }
                        },
                        "label": {
                            "name": "为标记点旁边增加标签",
                            "desc": "支持的属性见下表，可识别换行符。",
                            "type": 5,
                            "status": 1,
                            "props": {
                                "content": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "文本"
                                },
                                "color": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "文本颜色"
                                },
                                "fontSize": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "文字大小"
                                },
                                "x": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "label的坐标（废弃）"
                                },
                                "y": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "label的坐标（废弃）"
                                },
                                "anchorX": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "label的坐标，原点是 marker 对应的经纬度"
                                },
                                "anchorY": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "label的坐标，原点是 marker 对应的经纬度"
                                },
                                "borderWidth": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "边框宽度"
                                },
                                "borderColor": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "边框颜色"
                                },
                                "borderRadius": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "边框圆角"
                                },
                                "bgColor": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "背景色"
                                },
                                "padding": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "文本边缘留白"
                                },
                                "textAlign": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "文本对齐方式。有效值: left, right, center"
                                }
                            }
                        },
                        "anchor": {
                            "type": 1,
                            "status": 0,
                            "desc": "{x, y}，x 表示横向(0-1)，y 表示竖向(0-1)。{x: .5, y: 1} 表示底边中点",
                            "key": "anchorX,anchorY"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        }
                    }
                },
                "covers": {
                    "type": 0,
                    "status": 2,
                    "desc": "即将移除，请使用 markers"
                },
                "polyline": {
                    "name": "路线",
                    "desc": "指定一系列坐标点，从数组第一项连线至最后一项",
                    "type": "5",
                    "status": 1,
                    "props": {
                        "points": {
                            "type": 7,
                            "status": 0,
                            "desc": "经纬度数组"
                        },
                        "color": { "type": 7, "status": 0, "desc": "线的颜色" },
                        "width": { "type": 7, "status": 0, "desc": "线的宽度" },
                        "dottedLine": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否虚线"
                        },
                        "arrowLine": {
                            "type": 0,
                            "status": 2,
                            "desc": "带箭头的线"
                        },
                        "arrowIconPath": {
                            "type": 0,
                            "status": 2,
                            "desc": "更换箭头图标"
                        },
                        "borderColor": {
                            "type": 0,
                            "status": 2,
                            "desc": "线的边框颜色"
                        },
                        "borderWidth": {
                            "type": 0,
                            "status": 2,
                            "desc": "线的厚度"
                        }
                    }
                },
                "circles": {
                    "name": "圆",
                    "desc": "在地图上显示圆",
                    "status": 0,
                    "props": {
                        "latitude": { "type": 7, "status": 0, "desc": "纬度" },
                        "longitude": { "type": 7, "status": 0, "desc": "经度" },
                        "color": {
                            "type": 7,
                            "status": 0,
                            "desc": "描边的颜色"
                        },
                        "fillColor": {
                            "type": 7,
                            "status": 0,
                            "desc": "填充颜色"
                        },
                        "radius": { "type": 7, "status": 0, "desc": "半径" },
                        "strokeWidth": {
                            "type": 7,
                            "status": 0,
                            "desc": "描边的宽度"
                        }
                    }
                },
                "controls": {
                    "name": "控件",
                    "desc": "控件（即将废弃，建议使用 cover-view 代替在地图上显示控件，控件不随着地图移动。即将废弃，请使用 cover-view",
                    "type": 5,
                    "status": 0,
                    "props": {
                        "id": {
                            "type": 7,
                            "status": 0,
                            "desc": "在控件点击事件回调会返回此id"
                        },
                        "position": {
                            "type": 7,
                            "status": 0,
                            "desc": "控件相对地图位置"
                        },
                        "iconPath": { "type": 7, "status": 0, "desc": null },
                        "clickable": {
                            "type": 7,
                            "status": 0,
                            "desc": "默认不可点击"
                        }
                    }
                },
                "include-points": {
                    "type": 7,
                    "status": 0,
                    "desc": "缩放视野以包含所有给定的坐标点"
                },
                "show-location": {
                    "type": 7,
                    "status": 0,
                    "desc": "显示带有方向的当前定位点"
                },
                "polygons": {
                    "name": "多边形",
                    "desc": "指定一系列坐标点，根据 points 坐标数据生成闭合多边形",
                    "type": 5,
                    "status": 1,
                    "props": {
                        "points": {
                            "type": 7,
                            "status": 0,
                            "desc": "显示带有方向的当前定位点"
                        },
                        "strokeWidth": {
                            "type": 0,
                            "status": 2,
                            "desc": "描边的宽度"
                        },
                        "strokeColor": {
                            "type": 0,
                            "status": 2,
                            "desc": "描边的颜色"
                        },
                        "fillColor": {
                            "type": 7,
                            "status": 0,
                            "desc": "显示带有方向的当前定位点"
                        },
                        "zIndex": {
                            "type": 0,
                            "status": 2,
                            "desc": "设置多边形Z轴数值"
                        }
                    }
                },
                "subkey": {
                    "type": 0,
                    "status": 2,
                    "desc": "个性化地图使用的key"
                },
                "layer-style": {
                    "type": 0,
                    "status": 2,
                    "desc": "个性化地图配置的 style，不支持动态修改"
                },
                "rotate": {
                    "type": 0,
                    "status": 2,
                    "desc": "旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角"
                },
                "skew": {
                    "type": 0,
                    "status": 2,
                    "desc": "倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角"
                },
                "enable-3D": {
                    "type": 0,
                    "status": 2,
                    "desc": "展示3D楼块(工具暂不支持）"
                },
                "show-compass": {
                    "type": 0,
                    "status": 2,
                    "desc": "显示指南针"
                },
                "enable-overlooking": {
                    "type": 0,
                    "status": 2,
                    "desc": "开启俯视"
                },
                "enable-zoom": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否支持缩放"
                },
                "enable-scroll": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否支持拖动"
                },
                "enable-rotate": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否支持旋转"
                },
                "enable-satellite": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否开启卫星图"
                },
                "enable-traffic": {
                    "type": 0,
                    "status": 2,
                    "desc": "是否开启实时路况"
                },
                "bindupdated": {
                    "type": 0,
                    "status": 2,
                    "desc": "在地图渲染更新完成时触发",
                    "key": "onUpdated"
                },
                "bindpoitap": {
                    "type": 0,
                    "status": 2,
                    "desc": "点击地图poi点时触发",
                    "key": "onPoitap"
                },
                "bindmarkertap": {
                    "type": 1,
                    "status": 0,
                    "desc": "点击标记点时触发，会返回marker的id",
                    "key": "onMarkerTap"
                },
                "bindcallouttap": {
                    "type": 1,
                    "status": 0,
                    "desc": "点击标记点对应的气泡时触发，会返回marker的id",
                    "key": "onCalloutTap"
                },
                "bindcontroltap": {
                    "type": 1,
                    "status": 0,
                    "desc": "点击控件时触发，会返回control的id",
                    "key": "onControlTap"
                },
                "bindregionchange": {
                    "type": 1,
                    "status": 0,
                    "desc": "视野发生变化时触发",
                    "key": "onRegionChange",
                    "params": {
                        "type": { "type": 7, "status": 0, "desc": "" },
                        "causedBy": {
                            "type": 0,
                            "status": 2,
                            "desc": "拖动地图导致(drag)、缩放导致(scale)、调用接口导致(update)"
                        }
                    }
                },
                "bindtap": {
                    "type": 1,
                    "status": 0,
                    "desc": "点击地图时触发",
                    "key": "onTap"
                }
            }
        },
        "canvas": {
            "name": "画布",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html",
                "alipay": "https://docs.alipay.com/mini/component/canvas"
            },
            "desc": "相关api：wx.createCanvasContext。",
            "props": {
                "type": {
                    "type": 0,
                    "status": 2,
                    "desc": "指定 canvas 类型，当前仅支持 webgl"
                },
                "canvas-id": {
                    "type": 1,
                    "status": 0,
                    "desc": "canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性",
                    "key": "id"
                },
                "disable-scroll": {
                    "type": 7,
                    "status": 0,
                    "desc": "当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新"
                },
                "bindtouchstart": {
                    "type": 1,
                    "status": 0,
                    "desc": "手指触摸动作开始",
                    "key": "onTouchStart"
                },
                "bindtouchmove": {
                    "type": 1,
                    "status": 0,
                    "desc": "手指触摸后移动",
                    "key": "onTouchMove"
                },
                "bindtouchend": {
                    "type": 1,
                    "status": 0,
                    "desc": "手指触摸动作结束",
                    "key": "onTouchEnd"
                },
                "bindtouchcancel": {
                    "type": 1,
                    "status": 0,
                    "desc": "手指触摸动作被打断，如来电提醒，弹窗",
                    "key": "onTouchCancel"
                },
                "bindlongtap": {
                    "type": 1,
                    "status": 0,
                    "desc": "手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动",
                    "key": "onLongTap"
                },
                "binderror": {
                    "type": 0,
                    "status": 2,
                    "desc": "当发生错误时触发 error 事件"
                }
            }
        },
        "web-view": {
            "name": "组件用于承载 H5 网页，自动铺满整个小程序页面",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html",
                "alipay": "https://docs.alipay.com/mini/component/web-view"
            },
            "desc": "会自动铺满整个小程序页面，个人类型的小程序暂不支持使用。客户端 6.7.2 版本开始，navigationStyle: custom 对 web-view 组件无效",
            "props": {
                "src": {
                    "type": 7,
                    "status": 0,
                    "desc": "webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。"
                },
                "bindload": {
                    "type": 0,
                    "status": 2,
                    "desc": "网页加载成功时候触发此事件"
                },
                "binderror": {
                    "type": 0,
                    "status": 2,
                    "desc": "网页加载失败的时候触发此事件"
                },
                "bindmessage": {
                    "type": 1,
                    "status": 0,
                    "desc": "网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }，data是多次 postMessage 的参数组成的数组",
                    "key": "onMessage"
                }
            }
        }
    },
    "ComponentsInfo": [
        {
            "name": "视图",
            "type": "view",
            "body": {
                "movable-view": {
                    "name": "可移动的视图容器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html",
                        "alipay": "https://docs.alipay.com/mini/component/movable-view"
                    },
                    "desc": "在页面中可以拖拽滑动。movable-view必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。",
                    "props": {
                        "direction": {
                            "type": 7,
                            "status": 0,
                            "desc": "movable-view的移动方向，属性值有all、vertical、horizontal、none"
                        },
                        "inertia": {
                            "type": 0,
                            "status": 2,
                            "desc": "movable-view是否带有惯性"
                        },
                        "out-of-bounds": {
                            "type": 0,
                            "status": 2,
                            "desc": "超过可移动区域后，movable-view是否还可以移动"
                        },
                        "x": {
                            "type": 7,
                            "status": 0,
                            "desc": "定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画"
                        },
                        "y": {
                            "type": 7,
                            "status": 0,
                            "desc": "定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画"
                        },
                        "damping": {
                            "type": 0,
                            "status": 2,
                            "desc": "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
                        },
                        "friction": {
                            "type": 0,
                            "status": 2,
                            "desc": "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
                        },
                        "disabled": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否禁用"
                        },
                        "scale": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否支持双指缩放，默认缩放手势生效区域是在movable-view内"
                        },
                        "scale-min": {
                            "type": 0,
                            "status": 2,
                            "desc": "定义缩放倍数最小值"
                        },
                        "scale-max": {
                            "type": 0,
                            "status": 2,
                            "desc": "定义缩放倍数最大值"
                        },
                        "scale-value": {
                            "type": 0,
                            "status": 2,
                            "desc": "定义缩放倍数，取值范围为 0.5 - 10"
                        },
                        "animation": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否使用动画"
                        },
                        "bindchange": {
                            "type": 1,
                            "status": 0,
                            "desc": "拖动过程中触发的事件，event.detail = {x, y, source}",
                            "key": "onChange"
                        },
                        "bindscale": {
                            "type": 0,
                            "status": 2,
                            "desc": "缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持"
                        },
                        "htouchmove": {
                            "type": 0,
                            "status": 2,
                            "desc": "初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch"
                        },
                        "vtouchmove": {
                            "type": 0,
                            "status": 2,
                            "desc": "初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch"
                        }
                    }
                },
                "cover-view": {
                    "name": "覆盖在原生组件之上的文本视图。",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html",
                        "alipay": "https://docs.alipay.com/mini/component/cover-view"
                    },
                    "desc": "可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。",
                    "props": {
                        "scroll-top": {
                            "type": 0,
                            "status": 2,
                            "desc": "设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        }
                    }
                },
                "scroll-view": {
                    "name": "可滚动视图区域",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html",
                        "alipay": "https://docs.alipay.com/mini/component/scroll-view"
                    },
                    "desc": "使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。",
                    "props": {
                        "scroll-x": {
                            "type": 7,
                            "status": 0,
                            "desc": "允许横向滚动"
                        },
                        "scroll-y": {
                            "type": 7,
                            "status": 0,
                            "desc": "允许纵向滚动"
                        },
                        "scroll-top": {
                            "type": 3,
                            "status": 1,
                            "desc": "设置竖向滚动条位置",
                            "msg": "支付宝小程序只支持number类型"
                        },
                        "scroll-left": {
                            "type": 3,
                            "status": 1,
                            "desc": "设置横向滚动条位置",
                            "msg": "支付宝小程序只支持number类型"
                        },
                        "scroll-into-view": {
                            "type": 7,
                            "status": 0,
                            "desc": "值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素"
                        },
                        "scroll-with-animation": {
                            "type": 7,
                            "status": 0,
                            "desc": "在设置滚动条位置时使用动画过渡"
                        },
                        "enable-back-to-top": {
                            "type": 7,
                            "status": 0,
                            "desc": "当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向"
                        },
                        "bindscrolltoupper": {
                            "type": 1,
                            "status": 0,
                            "desc": "滚动到顶部/左边时触发",
                            "key": "onScrollToUpper",
                            "params": {
                                "scrolltoup": {
                                    "type": 1,
                                    "desc": "diff",
                                    "key": "scrollToUp"
                                }
                            }
                        },
                        "bindscrolltolower": {
                            "type": 1,
                            "status": 0,
                            "desc": "滚动到底部/右边时触发",
                            "key": "onScrollToLower",
                            "params": {
                                "scrolltolower": {
                                    "type": 1,
                                    "desc": "diff",
                                    "key": "scrollToLower"
                                }
                            }
                        },
                        "bindscroll": {
                            "type": 1,
                            "status": 0,
                            "desc": "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}",
                            "key": "onScrollToUpper",
                            "params": {
                                "deltaX": { "type": 0, "status": 2 },
                                "deltaY": { "type": 0, "status": 2 }
                            }
                        }
                    }
                },
                "swiper": {
                    "name": "滑块视图容器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html",
                        "alipay": "https://docs.alipay.com/mini/component/swiper"
                    },
                    "desc": "其中只可放置swiper-item组件，否则会导致未定义的行为。",
                    "props": {
                        "current-item-id": {
                            "type": 0,
                            "status": 2,
                            "desc": "missing"
                        },
                        "indicator-dots": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否显示面板指示点"
                        },
                        "indicator-color": {
                            "type": 7,
                            "status": 0,
                            "desc": "指示点颜色"
                        },
                        "indicator-active-color": {
                            "type": 7,
                            "status": 0,
                            "desc": "当前选中的指示点颜色"
                        },
                        "autoplay": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否自动切换"
                        },
                        "current": {
                            "type": 7,
                            "status": 0,
                            "desc": "当前所在滑块的 index"
                        },
                        "interval": {
                            "type": 7,
                            "status": 0,
                            "desc": "自动切换时间间隔"
                        },
                        "duration": {
                            "type": 7,
                            "status": 0,
                            "desc": "滑动动画时长"
                        },
                        "circular": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否启用无限滑动"
                        },
                        "vertical": {
                            "type": 7,
                            "status": 0,
                            "desc": "滑动方向是否为纵向"
                        },
                        "previous-margin": {
                            "type": 7,
                            "status": 0,
                            "desc": "前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值"
                        },
                        "next-margin": {
                            "type": 7,
                            "status": 0,
                            "desc": "后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值"
                        },
                        "display-multiple-items": {
                            "type": 0,
                            "status": 2,
                            "desc": "同时显示的滑块数量"
                        },
                        "skip-hidden-item-layout": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息"
                        },
                        "easing-function": {
                            "type": 0,
                            "status": 2,
                            "desc": "指定 swiper 切换缓动动画类型"
                        },
                        "bindchange": {
                            "type": 1,
                            "status": 1,
                            "desc": "current 改变时会触发 change 事件，event.detail = {current, source}",
                            "key": "onChange",
                            "params": {
                                "currentItemId": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "missing"
                                }
                            }
                        },
                        "bindtransition": {
                            "type": 0,
                            "status": 2,
                            "desc": "swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}"
                        },
                        "bindanimationfinish": {
                            "type": 0,
                            "status": 2,
                            "desc": "动画结束时会触发 animationfinish 事件，event.detail 同上"
                        }
                    }
                },
                "view": {
                    "name": "视图容器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html",
                        "alipay": "https://docs.alipay.com/mini/component/view"
                    },
                    "desc": "视图容器",
                    "props": {
                        "hover-class": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
                        },
                        "hover-stop-propagation": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定是否阻止本节点的祖先节点出现点击态"
                        },
                        "aria-role": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（角色）标识元素的作用"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        },
                        "hover-start-time": {
                            "type": 4,
                            "status": 0,
                            "desc": "按住后多久出现点击态，单位毫秒.",
                            "msg": "微信默认值40，支付宝无"
                        },
                        "hover-stay-time": {
                            "type": 4,
                            "status": 0,
                            "desc": "手指松开后点击态保留时间，单位毫秒.",
                            "msg": "微信默认值500，支付宝无"
                        }
                    }
                }
            }
        },
        {
            "name": "基础",
            "type": "basic",
            "body": {
                "icon": {
                    "name": "图标",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html",
                        "alipay": "https://docs.alipay.com/mini/component/icon"
                    },
                    "desc": "组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。",
                    "props": {
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        },
                        "color": {
                            "type": 7,
                            "status": 0,
                            "desc": "icon的颜色，同css的color"
                        },
                        "type": {
                            "type": 7,
                            "status": 0,
                            "desc": "icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear"
                        }
                    }
                },
                "progress": {
                    "name": "进度条",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html",
                        "alipay": "https://docs.alipay.com/mini/component/progress"
                    },
                    "desc": "组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。",
                    "props": {
                        "percent": {
                            "type": 7,
                            "status": 0,
                            "desc": "百分比0~100"
                        },
                        "show-info": {
                            "type": 7,
                            "status": 0,
                            "desc": "在进度条右侧显示百分比"
                        },
                        "border-radius": {
                            "type": 0,
                            "status": 2,
                            "desc": "圆角大小"
                        },
                        "font-size": {
                            "type": 0,
                            "status": 2,
                            "desc": "右侧百分比字体大小"
                        },
                        "color": {
                            "type": 3,
                            "status": 0,
                            "desc": "进度条颜色",
                            "key": "active-color"
                        },
                        "activeColor": {
                            "type": 1,
                            "status": 0,
                            "desc": "已选择的进度条的颜色",
                            "key": "active-color"
                        },
                        "backgroundColor": {
                            "type": 1,
                            "status": 0,
                            "desc": "未选择的进度条的颜色",
                            "key": "background-color"
                        },
                        "active": {
                            "type": 7,
                            "status": 0,
                            "desc": "进度条从左往右的动画"
                        },
                        "active-mode": {
                            "type": 0,
                            "status": 2,
                            "desc": "backwards: 动画从头播；forwards：动画从上次结束点接着播"
                        },
                        "bindactiveend": {
                            "type": 0,
                            "status": 2,
                            "desc": "动画完成事件"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        }
                    }
                },
                "rich-text": {
                    "name": "富文本",
                    "type": 5,
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html",
                        "alipay": "https://docs.alipay.com/mini/component/rich-text"
                    },
                    "desc": "富文本。",
                    "tagName": "custom-rich-text",
                    "path": "/__antmove/__component/custom-rich-text/custom-rich-text",
                    "props": {
                        "nodes": {
                            "type": 3,
                            "status": 1,
                            "desc": "节点列表/HTML String",
                            "msg": "支付宝小程序只支持Array类型"
                        },
                        "space": {
                            "type": 0,
                            "status": 2,
                            "desc": "显示连续空格"
                        }
                    }
                },
                "text": {
                    "name": "文本",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html",
                        "alipay": "https://docs.alipay.com/mini/component/text"
                    },
                    "desc": "文本。",
                    "props": {
                        "selectable": {
                            "type": 7,
                            "status": 0,
                            "desc": "文本是否可选"
                        },
                        "space": {
                            "type": 7,
                            "status": 0,
                            "desc": "显示连续空格"
                        },
                        "decode": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否解码"
                        },
                        "hidden": {
                            "type": 0,
                            "status": 2,
                            "desc": "隐藏该组件"
                        }
                    }
                }
            }
        },
        {
            "name": "表单",
            "type": "form",
            "body": {
                "checkbox-group": {
                    "name": "多项选择器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html",
                        "alipay": "https://docs.alipay.com/mini/component/checkbox-group"
                    },
                    "desc": "多项选择器，内部由多个checkbox组成。",
                    "props": {
                        "bindchange": {
                            "type": 1,
                            "status": 0,
                            "desc": "checkbox-group中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}",
                            "key": "onChange"
                        }
                    }
                },
                "form": {
                    "name": "表单",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html",
                        "alipay": "https://docs.alipay.com/mini/component/form"
                    },
                    "desc": "将组件内的用户输入的switch input checkbox slider radio picker 提交。当点击 form 表单中 form-type 为 submit 的 button 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。",
                    "props": {
                        "report-submit": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否返回 formId 用于发送模板消息"
                        },
                        "bindsubmit": {
                            "type": 1,
                            "status": 0,
                            "desc": "携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}",
                            "key": "onSubmit"
                        },
                        "bindreset": {
                            "type": 1,
                            "status": 0,
                            "desc": "表单重置时会触发 reset 事件",
                            "key": "onReset"
                        },
                        "report-submit-timeout": {
                            "type": 0,
                            "status": 2,
                            "desc": "等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId"
                        }
                    }
                },
                "input": {
                    "name": "输入框",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html",
                        "alipay": "https://docs.alipay.com/mini/component/input"
                    },
                    "desc": "该组件是原生组件，使用时请注意相关限制",
                    "props": {
                        "value": {
                            "type": 7,
                            "status": 0,
                            "desc": "输入框的初始内容"
                        },
                        "type": {
                            "type": 7,
                            "status": 0,
                            "desc": "input 的类型"
                        },
                        "password": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否是密码类型"
                        },
                        "placeholder": {
                            "type": 7,
                            "status": 0,
                            "desc": "输入框为空时占位符"
                        },
                        "placeholder-style": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定 placeholder 的样式"
                        },
                        "placeholder-class": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定 placeholder 的样式类"
                        },
                        "disabled": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否禁用"
                        },
                        "maxlength": {
                            "type": 7,
                            "status": 0,
                            "desc": "最大输入长度，设置为 -1 的时候不限制最大长度"
                        },
                        "cursor-spacing": {
                            "type": 0,
                            "status": 2,
                            "desc": "指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
                        },
                        "auto-focus": {
                            "type": 3,
                            "status": 0,
                            "desc": "(即将废弃，请直接使用 focus )自动聚焦，拉起键盘",
                            "key": "focus"
                        },
                        "focus": { "type": 7, "status": 0, "desc": "获取焦点" },
                        "confirm-type": {
                            "type": 7,
                            "status": 0,
                            "desc": "设置键盘右下角按钮的文字，仅在type='text'时生效"
                        },
                        "confirm-hold": {
                            "type": 7,
                            "status": 0,
                            "desc": "点击键盘右下角按钮时是否保持键盘不收起"
                        },
                        "cursor": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定focus时的光标位置"
                        },
                        "selection-start": {
                            "type": 7,
                            "status": 0,
                            "desc": "光标起始位置，自动聚集时有效，需与selection-end搭配使用"
                        },
                        "selection-end": {
                            "type": 7,
                            "status": 0,
                            "desc": "光标结束位置，自动聚集时有效，需与selection-start搭配使用"
                        },
                        "adjust-position": {
                            "type": 0,
                            "status": 2,
                            "desc": "键盘弹起时，是否自动上推页面"
                        },
                        "bindinput": {
                            "type": 1,
                            "status": 0,
                            "desc": "键盘输入时触发",
                            "key": "onInput"
                        },
                        "bindfocus": {
                            "type": 1,
                            "status": 0,
                            "desc": "输入框聚焦时触发",
                            "key": "onFocus"
                        },
                        "bindblur": {
                            "type": 1,
                            "status": 0,
                            "desc": "输入框失去焦点时触发",
                            "key": "onBlur"
                        },
                        "bindconfirm": {
                            "type": 1,
                            "status": 0,
                            "desc": "点击完成按钮时触发",
                            "key": "onConfirm"
                        },
                        "bindkeyboardheightchange": {
                            "type": 0,
                            "status": 2,
                            "desc": "键盘高度发生变化的时候触发此事件"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        }
                    }
                },
                "picker": {
                    "name": "从底部弹起的滚动选择器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html",
                        "alipay": "https://docs.alipay.com/mini/component/picker"
                    },
                    "desc": "从底部弹起的滚动选择器。",
                    "props": {
                        "mode": {
                            "type": 7,
                            "status": 0,
                            "desc": "选择器类型"
                        },
                        "bindchange": {
                            "type": 1,
                            "status": 0,
                            "desc": "发生改变时触发",
                            "key": "onChange"
                        },
                        "bindcancel": {
                            "type": 0,
                            "status": 2,
                            "desc": "取消选择时触发"
                        }
                    }
                },
                "picker-view": {
                    "name": "嵌入页面的滚动选择器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html",
                        "alipay": "https://docs.alipay.com/mini/component/picker-view"
                    },
                    "desc": "其中只可放置 picker-view-column组件，其它节点不会显示。",
                    "props": {
                        "value": {
                            "type": 7,
                            "status": 0,
                            "desc": "数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。"
                        },
                        "indicator-style": {
                            "type": 7,
                            "status": 0,
                            "desc": "设置选择器中间选中框的样式"
                        },
                        "indicator-class": {
                            "type": 7,
                            "status": 0,
                            "desc": "设置选择器中间选中框的类名"
                        },
                        "mask-style": {
                            "type": 7,
                            "status": 0,
                            "desc": "设置蒙层的样式"
                        },
                        "mask-class": {
                            "type": 7,
                            "status": 0,
                            "desc": "设置蒙层的类名"
                        },
                        "bindchange": {
                            "type": 1,
                            "status": 0,
                            "desc": "滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）",
                            "key": "onChange"
                        },
                        "bindpickstart": {
                            "type": 0,
                            "status": 2,
                            "desc": "当滚动选择开始时候触发事件"
                        },
                        "bindpickend": {
                            "type": 0,
                            "status": 2,
                            "desc": "当滚动选择结束时候触发事件"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        }
                    }
                },
                "radio": {
                    "name": "单选项目",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html",
                        "alipay": "https://docs.alipay.com/mini/component/radio"
                    },
                    "desc": "单选项目。",
                    "props": {
                        "value": {
                            "type": 7,
                            "status": 0,
                            "desc": "radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value"
                        },
                        "checked": {
                            "type": 7,
                            "status": 0,
                            "desc": "当前是否选中"
                        },
                        "disabled": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否禁用"
                        },
                        "color": {
                            "type": 7,
                            "status": 0,
                            "desc": "radio的颜色，同css的color"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        }
                    }
                },
                "slider": {
                    "name": "滑动选择器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html",
                        "alipay": "https://docs.alipay.com/mini/component/slider"
                    },
                    "desc": "滑动选择器。",
                    "props": {
                        "min": { "type": 7, "status": 0, "desc": "最小值" },
                        "max": { "type": 7, "status": 0, "desc": "最大值" },
                        "step": {
                            "type": 7,
                            "status": 0,
                            "desc": "步长，值必须大于 0，并可被(max - min)整除"
                        },
                        "disabled": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否禁用"
                        },
                        "value": { "type": 7, "status": 0, "desc": "当前取值" },
                        "color": {
                            "type": 3,
                            "status": 0,
                            "desc": "背景条的颜色",
                            "key": "background-color"
                        },
                        "selected-color": {
                            "type": 3,
                            "status": 0,
                            "desc": "已选择的颜色",
                            "key": "active-color"
                        },
                        "show-value": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否显示当前 value"
                        },
                        "bindchange": {
                            "type": 1,
                            "status": 0,
                            "desc": "完成一次拖动后触发的事件",
                            "key": "onChange"
                        },
                        "backgroundColor": {
                            "type": 1,
                            "status": 0,
                            "desc": "背景条的颜色",
                            "key": "background-color"
                        },
                        "activeColor": {
                            "type": 1,
                            "status": 0,
                            "desc": "已选择的颜色",
                            "key": "active-color"
                        },
                        "block-size": {
                            "type": 1,
                            "status": 0,
                            "desc": "滑块的大小，取值范围为 12 - 28",
                            "key": "handle-size"
                        },
                        "block-color": {
                            "type": 1,
                            "status": 0,
                            "desc": "滑块的颜色",
                            "key": "handle-color"
                        },
                        "bindchanging": {
                            "type": 1,
                            "status": 0,
                            "desc": "拖动过程中触发的事件",
                            "key": "onChanging"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        }
                    }
                },
                "switch": {
                    "name": "开关选择器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html",
                        "alipay": "https://docs.alipay.com/mini/component/switch"
                    },
                    "desc": "开关选择器。",
                    "props": {
                        "checked": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否选中"
                        },
                        "disabled": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否禁用"
                        },
                        "bindchange": {
                            "type": 1,
                            "status": 0,
                            "desc": "checked 改变时触发 change 事件，event.detail={ value}",
                            "key": "onChange"
                        },
                        "type": {
                            "type": 0,
                            "status": 2,
                            "desc": "样式，有效值：switch, checkbox"
                        },
                        "color": {
                            "type": 7,
                            "status": 0,
                            "desc": "switch 的颜色，同 css 的 color"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        }
                    }
                },
                "textarea": {
                    "name": "多行输入框",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html",
                        "alipay": "https://docs.alipay.com/mini/component/textarea"
                    },
                    "desc": "该组件是原生组件，使用时请注意相关限制。",
                    "props": {
                        "value": {
                            "type": 7,
                            "status": 0,
                            "desc": "输入框的内容"
                        },
                        "placeholder": {
                            "type": 7,
                            "status": 0,
                            "desc": "占位符"
                        },
                        "placeholder-style": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定 placeholder 的样式"
                        },
                        "placeholder-class": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定 placeholder 的样式类"
                        },
                        "disabled": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否禁用"
                        },
                        "maxlength": {
                            "type": 7,
                            "status": 0,
                            "desc": "最大长度，当设置为-1时不限制最大长度"
                        },
                        "auto-focus": {
                            "type": 1,
                            "status": 0,
                            "desc": "focus"
                        },
                        "focus": { "type": 7, "status": 0, "desc": "获取焦点" },
                        "auto-height": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否自动增高，设置auto-height时，style.height不生效"
                        },
                        "fixed": {
                            "type": 0,
                            "status": 2,
                            "desc": "如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true"
                        },
                        "cursor-spacing": {
                            "type": 0,
                            "status": 2,
                            "desc": "指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离"
                        },
                        "cursor": {
                            "type": 0,
                            "status": 2,
                            "desc": "指定focus时的光标位置"
                        },
                        "show-confirm-bar": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否显示键盘上方带有”完成“按钮那一栏"
                        },
                        "selection-start": {
                            "type": 0,
                            "status": 2,
                            "desc": "光标起始位置，自动聚集时有效，需与selection-end搭配使用"
                        },
                        "selection-end": {
                            "type": 0,
                            "status": 2,
                            "desc": "光标结束位置，自动聚集时有效，需与selection-start搭配使用"
                        },
                        "adjust-position": {
                            "type": 0,
                            "status": 2,
                            "desc": "键盘弹起时，是否自动上推页面"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        },
                        "bindlinechange": {
                            "type": 1,
                            "status": 0,
                            "desc": "onLineChange"
                        },
                        "bindfocus": {
                            "type": 1,
                            "status": 0,
                            "desc": "输入框聚焦时触发",
                            "key": "onFocus"
                        },
                        "bindblur": {
                            "type": 1,
                            "status": 0,
                            "desc": "输入框失去焦点时触发",
                            "key": "onBlur"
                        },
                        "bindconfirm": {
                            "type": 1,
                            "status": 0,
                            "desc": "点击完成时， 触发 confirm 事件，event.detail = {value: value}",
                            "key": "onConfirm"
                        },
                        "bindinput": {
                            "type": 1,
                            "status": 0,
                            "desc": "当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode 为键值，目前工具还不支持返回keyCode参数。bindinput 处理函数的返回值并不会反映到 textarea 上",
                            "key": "onInput"
                        },
                        "bindkeyboardheightchange": {
                            "type": 0,
                            "status": 2,
                            "desc": "键盘高度发生变化的时候触发此事件"
                        }
                    }
                },
                "button": {
                    "type": 0,
                    "name": "按钮",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html",
                        "alipay": "https://docs.alipay.com/mini/component/button"
                    },
                    "desc": "按钮",
                    "tagName": "btn",
                    "path": "/__antmove/__component/btn/btn",
                    "props": {
                        "size": {
                            "type": 7,
                            "status": 0,
                            "desc": "按钮的大小"
                        },
                        "type": {
                            "type": 7,
                            "status": 0,
                            "desc": "按钮的样式类型"
                        },
                        "plain": {
                            "type": 7,
                            "status": 0,
                            "desc": "按钮是否镂空，背景色透明"
                        },
                        "disabled": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否禁用"
                        },
                        "loading": {
                            "type": 7,
                            "status": 0,
                            "desc": "名称前是否带 loading 图标"
                        },
                        "form-type": {
                            "type": 7,
                            "status": 0,
                            "desc": "用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件"
                        },
                        "open-type": {
                            "type": 3,
                            "status": 1,
                            "desc": "微信开放能力",
                            "props": {
                                "contact": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，具体说明"
                                },
                                "share": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "触发用户转发，使用前建议先阅读使用指引"
                                },
                                "getPhoneNumber": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，具体说明"
                                },
                                "getUserInfo": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "获取用户信息，可以从bindgetuserinfo回调中获取到用户信息"
                                },
                                "launchApp": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "打开APP，可以通过app-parameter属性设定向APP传的参数具体说明"
                                },
                                "openSetting": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "打开授权设置页"
                                },
                                "feedback": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容"
                                }
                            }
                        },
                        "hover-class": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定按钮按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
                        },
                        "hover-stop-propagation": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定是否阻止本节点的祖先节点出现点击态"
                        },
                        "hover-start-time": {
                            "type": 7,
                            "status": 0,
                            "desc": "按住后多久出现点击态，单位毫秒"
                        },
                        "hover-stay-time": {
                            "type": 7,
                            "status": 0,
                            "desc": "手指松开后点击态保留时间，单位毫秒"
                        },
                        "lang": {
                            "type": 0,
                            "status": 2,
                            "desc": "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。"
                        },
                        "session-from": {
                            "type": 0,
                            "status": 2,
                            "desc": "会话来源，open-type=\"contact\"时有效"
                        },
                        "send-message-title": {
                            "type": 0,
                            "status": 2,
                            "desc": "会话内消息卡片标题，open-type=\"contact\"时有效"
                        },
                        "send-message-path": {
                            "type": 0,
                            "status": 2,
                            "desc": "会话内消息卡片点击跳转小程序路径，open-type=\"contact\"时有效"
                        },
                        "send-message-img": {
                            "type": 0,
                            "status": 2,
                            "desc": "会话内消息卡片图片，open-type=\"contact\"时有效"
                        },
                        "app-parameter": {
                            "type": 7,
                            "status": 0,
                            "desc": "打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效"
                        },
                        "show-message-card": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，open-type=\"contact\"时有效"
                        },
                        "bindgetuserinfo": {
                            "type": 1,
                            "status": 0,
                            "desc": "用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type=\"getUserInfo\"时有效",
                            "key": "onGetuserInfo"
                        },
                        "bindcontact": {
                            "type": 0,
                            "status": 2,
                            "desc": "客服消息回调，open-type=\"contact\"时有效"
                        },
                        "bindgetphonenumber": {
                            "type": 1,
                            "status": 0,
                            "desc": "获取用户手机号回调，open-type=getPhoneNumber时有效",
                            "key": "onGetPhoneNumber"
                        },
                        "binderror": {
                            "type": 0,
                            "status": 2,
                            "desc": "当使用开放能力时，发生错误的回调，open-type=launchApp时有效"
                        },
                        "bindopensetting": {
                            "type": 1,
                            "status": 0,
                            "desc": "在打开授权设置页后回调，open-type=openSetting时有效",
                            "key": "onOpenSetting"
                        },
                        "bindlaunchapp": {
                            "type": 0,
                            "status": 2,
                            "desc": "打开 APP 成功的回调，open-type=launchApp时有效"
                        },
                        "catchtap": {
                            "type": 1,
                            "status": 0,
                            "desc": "diff",
                            "key": "catchTap"
                        }
                    }
                },
                "label": {
                    "name": "表单组件标签",
                    "url": {
                        "wechat": "http://www.ionic.wang/weixin/component/label.html",
                        "alipay": "https://docs.alipay.com/mini/component/label"
                    },
                    "desc": "用来改进表单组件的可用性。使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。",
                    "props": {
                        "for": {
                            "type": 7,
                            "status": 0,
                            "desc": "绑定控件的 id"
                        }
                    },
                    "type": 7,
                    "status": 0
                },
                "checkbox": {
                    "name": "多选项目",
                    "url": {
                        "wechat": "http://www.ionic.wang/weixin/component/checkbox.html",
                        "alipay": "https://docs.alipay.com/mini/component/checkbox"
                    },
                    "desc": "多选项目",
                    "props": {
                        "value": {
                            "type": 7,
                            "status": 0,
                            "desc": "<checkbox/>标识，选中时触发<checkbox-group/>的 change 事件，并携带 <checkbox/> 的 value"
                        },
                        "disabled": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否禁用"
                        },
                        "checked": {
                            "type": 7,
                            "status": 0,
                            "desc": "当前是否选中，可用来设置默认选中"
                        }
                    },
                    "type": 7,
                    "status": 0
                }
            }
        },
        {
            "name": "导航",
            "type": "navigator",
            "body": {
                "navigator": {
                    "name": "页面链接",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html",
                        "alipay": "https://docs.alipay.com/mini/component/navigator"
                    },
                    "desc": "页面链接。",
                    "props": {
                        "target": {
                            "type": 0,
                            "status": 2,
                            "desc": "在哪个目标上发生跳转，默认当前小程序"
                        },
                        "url": {
                            "type": 7,
                            "status": 0,
                            "desc": "当前小程序内的跳转链接"
                        },
                        "delta": {
                            "type": 0,
                            "status": 2,
                            "desc": "当 open-type 为 'navigateBack' 时有效，表示回退的层数"
                        },
                        "app-id": {
                            "type": 0,
                            "status": 2,
                            "desc": "当target=\"miniProgram\"时有效，要打开的小程序 appId"
                        },
                        "path": {
                            "type": 0,
                            "status": 2,
                            "desc": "当target=\"miniProgram\"时有效，打开的页面路径，如果为空则打开首页"
                        },
                        "extra-data": {
                            "type": 0,
                            "status": 2,
                            "desc": "当target=\"miniProgram\"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据"
                        },
                        "version": {
                            "type": 0,
                            "status": 2,
                            "desc": "当target=\"miniProgram\"时有效，要打开的小程序版本"
                        },
                        "hover-class": {
                            "type": 7,
                            "status": 0,
                            "desc": "指定点击时的样式类，当hover-class=\"none\"时，没有点击态效果"
                        },
                        "hover-stop-propagation": {
                            "type": 0,
                            "status": 2,
                            "desc": "指定是否阻止本节点的祖先节点出现点击态"
                        },
                        "bindsuccess": {
                            "type": 0,
                            "status": 2,
                            "desc": "当target=\"miniProgram\"时有效，跳转小程序成功"
                        },
                        "bindfail": {
                            "type": 0,
                            "status": 2,
                            "desc": "当target=\"miniProgram\"时有效，跳转小程序失败"
                        },
                        "bindcomplete": {
                            "type": 0,
                            "status": 2,
                            "desc": "当target=\"miniProgram\"时有效，跳转小程序完成"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        },
                        "hover-start-time": {
                            "type": 4,
                            "status": 0,
                            "desc": "按住后多久出现点击态，单位毫秒"
                        },
                        "hover-stay-time": {
                            "type": 4,
                            "status": 0,
                            "desc": "手指松开后点击态保留时间，单位毫秒"
                        },
                        "open-type": {
                            "props": {
                                "reLaunch": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "对应 wx.reLaunch 的功能"
                                },
                                "exit": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "退出小程序，target=\"miniProgram\"时生效"
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "媒体组件",
            "type": "media",
            "body": {
                "audio": {
                    "name": "音频",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html",
                        "alipay": "https://yuque.antfin-inc.com/amap-webx/api/inul90"
                    },
                    "desc": "1.6.0版本开始，该组件不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口",
                    "props": {
                        "id": {
                            "type": 7,
                            "status": 0,
                            "desc": "audio 组件的唯一标识符"
                        },
                        "src": {
                            "type": 7,
                            "status": 0,
                            "desc": "要播放音频的资源地址"
                        },
                        "loop": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否循环播放"
                        },
                        "controls": {
                            "type": 7,
                            "status": 0,
                            "desc": "是否显示默认控件"
                        },
                        "poster": {
                            "type": 7,
                            "status": 0,
                            "desc": "默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效"
                        },
                        "name": {
                            "type": 7,
                            "status": 0,
                            "desc": "默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效"
                        },
                        "author": {
                            "type": 7,
                            "status": 0,
                            "desc": "默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效"
                        },
                        "binderror": {
                            "type": 1,
                            "status": 0,
                            "desc": "当发生错误时触发 error 事件",
                            "key": "onError"
                        },
                        "bindplay": {
                            "type": 1,
                            "status": 0,
                            "desc": "当开始/继续播放时触发play事件",
                            "key": "onPlay"
                        },
                        "bindpause": {
                            "type": 1,
                            "status": 0,
                            "desc": "当暂停播放时触发 pause 事件",
                            "key": "onPause"
                        },
                        "bindtimeupdate": {
                            "type": 1,
                            "status": 0,
                            "desc": "当播放进度改变时触发",
                            "key": "onTimeUpdate"
                        },
                        "bindended": {
                            "type": 1,
                            "status": 0,
                            "desc": "当播放到末尾时触发 ended 事件",
                            "key": "onEnded"
                        }
                    }
                },
                "image": {
                    "name": "图片",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html",
                        "alipay": "https://docs.alipay.com/mini/component/image"
                    },
                    "desc": "支持JPG、PNG、SVG格式，2.3.0 起支持云文件ID。",
                    "props": {
                        "src": {
                            "type": 7,
                            "status": 0,
                            "desc": "图片资源地址"
                        },
                        "mode": {
                            "type": 7,
                            "status": 0,
                            "desc": "图片裁剪、缩放的模式"
                        },
                        "lazy-load": {
                            "type": 7,
                            "status": 0,
                            "desc": "图片懒加载，在即将进入一定范围（上下三屏）时才开始加载"
                        },
                        "show-menu-by-longpress": {
                            "type": 0,
                            "status": 2,
                            "desc": "开启长按图片显示识别小程序码菜单"
                        },
                        "aria-label": {
                            "type": 0,
                            "status": 2,
                            "desc": "无障碍访问，（属性）元素的额外描述"
                        },
                        "binderror": {
                            "type": 1,
                            "status": 0,
                            "desc": "当错误发生时触发",
                            "key": "onError"
                        },
                        "bindload": {
                            "type": 1,
                            "status": 0,
                            "desc": "当图片载入完毕时触发",
                            "key": "onLoad"
                        }
                    }
                }
            }
        },
        {
            "name": "地图",
            "type": "map",
            "body": {
                "map": {
                    "name": "地图",
                    "type": 5,
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html",
                        "alipay": "https://docs.alipay.com/mini/component/map"
                    },
                    "tagName": "custom-map",
                    "path": "/__antmove/__component/custom-map/custom-map",
                    "desc": "use custom map component instead default map component.",
                    "props": {
                        "longitude": {
                            "type": 7,
                            "status": 0,
                            "desc": "中心经度"
                        },
                        "latitude": {
                            "type": 7,
                            "status": 0,
                            "desc": "中心纬度"
                        },
                        "scale": { "type": 7, "status": 0, "desc": "缩放级别" },
                        "markers": {
                            "name": "标记点",
                            "type": 5,
                            "status": 1,
                            "desc": "标记点用于在地图上显示标记的位置",
                            "props": {
                                "id": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "marker 点击事件回调会返回此 id。建议为每个 marker 设置上 number 类型 id，保证更新 marker 时有更好的性能。"
                                },
                                "latitude": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "浮点数，范围 -90 ~ 90"
                                },
                                "longitude": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "浮点数，范围 -180 ~ 180"
                                },
                                "title": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "点击时显示，callout存在时将被忽略"
                                },
                                "zIndex": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "显示层级"
                                },
                                "iconPath": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": null
                                },
                                "rotate": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "顺时针旋转的角度，范围 0 ~ 360，默认为 0"
                                },
                                "alpha": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "默认 1，无透明，范围 0 ~ 1"
                                },
                                "width": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "默认为图片实际宽度"
                                },
                                "height": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "默认为图片实际高度"
                                },
                                "callout": {
                                    "name": "自定义标记点上方的气泡窗口",
                                    "desc": "支持的属性见下表，可识别换行符。",
                                    "type": 5,
                                    "status": "1",
                                    "props": {
                                        "content": {
                                            "type": 7,
                                            "status": 0,
                                            "desc": "文本"
                                        },
                                        "color": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "文本颜色"
                                        },
                                        "fontSize": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "文字大小"
                                        },
                                        "borderRadius": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "边框圆角"
                                        },
                                        "borderWidth": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "边框宽度"
                                        },
                                        "borderColor": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "边框颜色"
                                        },
                                        "bgColor": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "背景色"
                                        },
                                        "padding": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "文本边缘留白"
                                        },
                                        "display": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "BYCLICK':点击显示; 'ALWAYS':常显"
                                        },
                                        "textAlign": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "文本对齐方式"
                                        }
                                    }
                                },
                                "label": {
                                    "name": "为标记点旁边增加标签",
                                    "desc": "支持的属性见下表，可识别换行符。",
                                    "type": 5,
                                    "status": 1,
                                    "props": {
                                        "content": {
                                            "type": 7,
                                            "status": 0,
                                            "desc": "文本"
                                        },
                                        "color": {
                                            "type": 7,
                                            "status": 0,
                                            "desc": "文本颜色"
                                        },
                                        "fontSize": {
                                            "type": 7,
                                            "status": 0,
                                            "desc": "文字大小"
                                        },
                                        "x": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "label的坐标（废弃）"
                                        },
                                        "y": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "label的坐标（废弃）"
                                        },
                                        "anchorX": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "label的坐标，原点是 marker 对应的经纬度"
                                        },
                                        "anchorY": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "label的坐标，原点是 marker 对应的经纬度"
                                        },
                                        "borderWidth": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "边框宽度"
                                        },
                                        "borderColor": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "边框颜色"
                                        },
                                        "borderRadius": {
                                            "type": 7,
                                            "status": 0,
                                            "desc": "边框圆角"
                                        },
                                        "bgColor": {
                                            "type": 7,
                                            "status": 0,
                                            "desc": "背景色"
                                        },
                                        "padding": {
                                            "type": 7,
                                            "status": 0,
                                            "desc": "文本边缘留白"
                                        },
                                        "textAlign": {
                                            "type": 0,
                                            "status": 2,
                                            "desc": "文本对齐方式。有效值: left, right, center"
                                        }
                                    }
                                },
                                "anchor": {
                                    "type": 1,
                                    "status": 0,
                                    "desc": "{x, y}，x 表示横向(0-1)，y 表示竖向(0-1)。{x: .5, y: 1} 表示底边中点",
                                    "key": "anchorX,anchorY"
                                },
                                "aria-label": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "无障碍访问，（属性）元素的额外描述"
                                }
                            }
                        },
                        "covers": {
                            "type": 0,
                            "status": 2,
                            "desc": "即将移除，请使用 markers"
                        },
                        "polyline": {
                            "name": "路线",
                            "desc": "指定一系列坐标点，从数组第一项连线至最后一项",
                            "type": "5",
                            "status": 1,
                            "props": {
                                "points": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "经纬度数组"
                                },
                                "color": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "线的颜色"
                                },
                                "width": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "线的宽度"
                                },
                                "dottedLine": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "是否虚线"
                                },
                                "arrowLine": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "带箭头的线"
                                },
                                "arrowIconPath": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "更换箭头图标"
                                },
                                "borderColor": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "线的边框颜色"
                                },
                                "borderWidth": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "线的厚度"
                                }
                            }
                        },
                        "circles": {
                            "name": "圆",
                            "desc": "在地图上显示圆",
                            "status": 0,
                            "props": {
                                "latitude": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "纬度"
                                },
                                "longitude": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "经度"
                                },
                                "color": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "描边的颜色"
                                },
                                "fillColor": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "填充颜色"
                                },
                                "radius": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "半径"
                                },
                                "strokeWidth": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "描边的宽度"
                                }
                            }
                        },
                        "controls": {
                            "name": "控件",
                            "desc": "控件（即将废弃，建议使用 cover-view 代替在地图上显示控件，控件不随着地图移动。即将废弃，请使用 cover-view",
                            "type": 5,
                            "status": 0,
                            "props": {
                                "id": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "在控件点击事件回调会返回此id"
                                },
                                "position": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "控件相对地图位置"
                                },
                                "iconPath": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": null
                                },
                                "clickable": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "默认不可点击"
                                }
                            }
                        },
                        "include-points": {
                            "type": 7,
                            "status": 0,
                            "desc": "缩放视野以包含所有给定的坐标点"
                        },
                        "show-location": {
                            "type": 7,
                            "status": 0,
                            "desc": "显示带有方向的当前定位点"
                        },
                        "polygons": {
                            "name": "多边形",
                            "desc": "指定一系列坐标点，根据 points 坐标数据生成闭合多边形",
                            "type": 5,
                            "status": 1,
                            "props": {
                                "points": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "显示带有方向的当前定位点"
                                },
                                "strokeWidth": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "描边的宽度"
                                },
                                "strokeColor": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "描边的颜色"
                                },
                                "fillColor": {
                                    "type": 7,
                                    "status": 0,
                                    "desc": "显示带有方向的当前定位点"
                                },
                                "zIndex": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "设置多边形Z轴数值"
                                }
                            }
                        },
                        "subkey": {
                            "type": 0,
                            "status": 2,
                            "desc": "个性化地图使用的key"
                        },
                        "layer-style": {
                            "type": 0,
                            "status": 2,
                            "desc": "个性化地图配置的 style，不支持动态修改"
                        },
                        "rotate": {
                            "type": 0,
                            "status": 2,
                            "desc": "旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角"
                        },
                        "skew": {
                            "type": 0,
                            "status": 2,
                            "desc": "倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角"
                        },
                        "enable-3D": {
                            "type": 0,
                            "status": 2,
                            "desc": "展示3D楼块(工具暂不支持）"
                        },
                        "show-compass": {
                            "type": 0,
                            "status": 2,
                            "desc": "显示指南针"
                        },
                        "enable-overlooking": {
                            "type": 0,
                            "status": 2,
                            "desc": "开启俯视"
                        },
                        "enable-zoom": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否支持缩放"
                        },
                        "enable-scroll": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否支持拖动"
                        },
                        "enable-rotate": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否支持旋转"
                        },
                        "enable-satellite": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否开启卫星图"
                        },
                        "enable-traffic": {
                            "type": 0,
                            "status": 2,
                            "desc": "是否开启实时路况"
                        },
                        "bindupdated": {
                            "type": 0,
                            "status": 2,
                            "desc": "在地图渲染更新完成时触发",
                            "key": "onUpdated"
                        },
                        "bindpoitap": {
                            "type": 0,
                            "status": 2,
                            "desc": "点击地图poi点时触发",
                            "key": "onPoitap"
                        },
                        "bindmarkertap": {
                            "type": 1,
                            "status": 0,
                            "desc": "点击标记点时触发，会返回marker的id",
                            "key": "onMarkerTap"
                        },
                        "bindcallouttap": {
                            "type": 1,
                            "status": 0,
                            "desc": "点击标记点对应的气泡时触发，会返回marker的id",
                            "key": "onCalloutTap"
                        },
                        "bindcontroltap": {
                            "type": 1,
                            "status": 0,
                            "desc": "点击控件时触发，会返回control的id",
                            "key": "onControlTap"
                        },
                        "bindregionchange": {
                            "type": 1,
                            "status": 0,
                            "desc": "视野发生变化时触发",
                            "key": "onRegionChange",
                            "params": {
                                "type": { "type": 7, "status": 0, "desc": "" },
                                "causedBy": {
                                    "type": 0,
                                    "status": 2,
                                    "desc": "拖动地图导致(drag)、缩放导致(scale)、调用接口导致(update)"
                                }
                            }
                        },
                        "bindtap": {
                            "type": 1,
                            "status": 0,
                            "desc": "点击地图时触发",
                            "key": "onTap"
                        }
                    }
                }
            }
        },
        {
            "name": "画布",
            "type": "canvas",
            "body": {
                "canvas": {
                    "name": "画布",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html",
                        "alipay": "https://docs.alipay.com/mini/component/canvas"
                    },
                    "desc": "相关api：wx.createCanvasContext。",
                    "props": {
                        "type": {
                            "type": 0,
                            "status": 2,
                            "desc": "指定 canvas 类型，当前仅支持 webgl"
                        },
                        "canvas-id": {
                            "type": 1,
                            "status": 0,
                            "desc": "canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性",
                            "key": "id"
                        },
                        "disable-scroll": {
                            "type": 7,
                            "status": 0,
                            "desc": "当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新"
                        },
                        "bindtouchstart": {
                            "type": 1,
                            "status": 0,
                            "desc": "手指触摸动作开始",
                            "key": "onTouchStart"
                        },
                        "bindtouchmove": {
                            "type": 1,
                            "status": 0,
                            "desc": "手指触摸后移动",
                            "key": "onTouchMove"
                        },
                        "bindtouchend": {
                            "type": 1,
                            "status": 0,
                            "desc": "手指触摸动作结束",
                            "key": "onTouchEnd"
                        },
                        "bindtouchcancel": {
                            "type": 1,
                            "status": 0,
                            "desc": "手指触摸动作被打断，如来电提醒，弹窗",
                            "key": "onTouchCancel"
                        },
                        "bindlongtap": {
                            "type": 1,
                            "status": 0,
                            "desc": "手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动",
                            "key": "onLongTap"
                        },
                        "binderror": {
                            "type": 0,
                            "status": 2,
                            "desc": "当发生错误时触发 error 事件"
                        }
                    }
                }
            }
        },
        {
            "name": "开放能力",
            "type": "openAbility",
            "body": {
                "web-view": {
                    "name": "组件用于承载 H5 网页，自动铺满整个小程序页面",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html",
                        "alipay": "https://docs.alipay.com/mini/component/web-view"
                    },
                    "desc": "会自动铺满整个小程序页面，个人类型的小程序暂不支持使用。客户端 6.7.2 版本开始，navigationStyle: custom 对 web-view 组件无效",
                    "props": {
                        "src": {
                            "type": 7,
                            "status": 0,
                            "desc": "webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。"
                        },
                        "bindload": {
                            "type": 0,
                            "status": 2,
                            "desc": "网页加载成功时候触发此事件"
                        },
                        "binderror": {
                            "type": 0,
                            "status": 2,
                            "desc": "网页加载失败的时候触发此事件"
                        },
                        "bindmessage": {
                            "type": 1,
                            "status": 0,
                            "desc": "网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }，data是多次 postMessage 的参数组成的数组",
                            "key": "onMessage"
                        }
                    }
                }
            }
        }
    ]
};
