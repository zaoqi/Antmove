module.exports = {
    "apiInfo": [
        {
            "name": "基础",
            "type": "basic",
            "body": {
                "canIUse": {
                    "status": 0,
                    "desc": "判断小程序的 API，回调，参数，组件等是否在当前版本可用",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html",
                        "alipay": "https://docs.alipay.com/mini/api/can-i-use"
                    },
                    "body": {}
                },
                "getSystemInfo": {
                    "status": 1,
                    "desc": "获取系统信息",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html",
                        "alipay": "https://docs.alipay.com/mini/api/system-info"
                    },
                    "body": {
                        "msg": "返回值属性值缺失",
                        "returnValue": {
                            "props": {
                                "SDKVersion": {
                                    "type": 0,
                                    "desc": "客户端基础库版本"
                                },
                                "benchmarkLevel": {
                                    "type": 0,
                                    "desc": "仅 Android 小游戏 设备性能等级取值为：-2 或 0"
                                },
                                "albumAuthorized": {
                                    "type": 0,
                                    "desc": "允许微信使用相册的开关 仅 iOS 有效"
                                },
                                "cameraAuthorized": {
                                    "type": 0,
                                    "desc": "允许微信使用摄像头的开关"
                                },
                                "locationAuthorized": {
                                    "type": 0,
                                    "desc": "允许微信使用定位的开关"
                                },
                                "microphoneAuthorized": {
                                    "type": 0,
                                    "desc": "允许微信使用麦克风的开关"
                                },
                                "notificationAuthorized": {
                                    "type": 0,
                                    "desc": "允许微信通知的开关 仅 iOS 有效"
                                },
                                "notificationAlertAuthorized": {
                                    "type": 0,
                                    "desc": "允许微信通知带有提醒的开关 仅 iOS 有效"
                                },
                                "notificationBadgeAuthorized": {
                                    "type": 0,
                                    "desc": "允许微信通知带有标记的开关 仅 iOS 有效"
                                },
                                "notificationSoundAuthorized": {
                                    "type": 0,
                                    "desc": "允许微信通知带有声音的开关 仅 iOS 有效"
                                },
                                "bluetoothEnabled": {
                                    "type": 0,
                                    "desc": "蓝牙的系统开关"
                                },
                                "locationEnabled": {
                                    "type": 0,
                                    "desc": "地理位置的系统开关"
                                },
                                "wifiEnabled": {
                                    "type": 0,
                                    "desc": "Wi-Fi 的系统开关"
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "设备相关",
            "type": "equipment",
            "body": {
                "getNetworkType": {
                    "status": 0,
                    "desc": "获取网络类型",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html",
                        "alipay": "https://docs.alipay.com/mini/api/network-status#mygetnetworktype"
                    },
                    "body": {
                        "msg": "返回值属性差异",
                        "returnValue": {
                            "props": {
                                "networkType": {
                                    "type": 1,
                                    "desc": "wx: wifi/2g/3g/4g/unknown/none, alipay: WIFI/2G/3G/4G/UNKNOWN/NOTREACHABLE"
                                }
                            }
                        }
                    }
                },
                "makePhoneCall": {
                    "status": 1,
                    "desc": "拨打电话",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html",
                        "alipay": "https://docs.alipay.com/mini/api/macke-call"
                    },
                    "body": {
                        "msg": "封装后不支持回调",
                        "params": {
                            "props": {
                                "success": {
                                    "type": 0,
                                    "desc": "接口调用成功的回调函数"
                                },
                                "fail": {
                                    "type": 0,
                                    "desc": "接口调用失败的回调函数"
                                },
                                "complete": {
                                    "type": 0,
                                    "desc": "接口调用结束的回调函数（调用成功、失败都会执行）"
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "位置",
            "type": "location",
            "body": {
                "openLocation": {
                    "status": 0,
                    "desc": "打开位置",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html",
                        "alipay": "https://docs.alipay.com/mini/api/as9kin"
                    },
                    "body": {}
                },
                "getLocation": {
                    "status": 1,
                    "desc": "获取位置",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html",
                        "alipay": "https://docs.alipay.com/mini/api/mkxuqd"
                    },
                    "body": {
                        "msg": "参数缺失, 参数type的取值/默认值差异, 返回值缺失/差异",
                        "params": {
                            "props": {
                                "altitude": {
                                    "type": 0,
                                    "desc": "传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度"
                                },
                                "type的取值": {
                                    "type": 4,
                                    "desc": "wx: 默认值wgs84, alipay: 默认值0"
                                }
                            }
                        },
                        "returnValue": {
                            "props": {
                                "speed": {
                                    "type": 0,
                                    "desc": "速度，单位 m/s"
                                },
                                "altitude": {
                                    "type": 0,
                                    "desc": "高度，单位 m"
                                },
                                "verticalAccuracy": {
                                    "type": 0,
                                    "desc": "垂直精度，单位 m（Android 无法获取，返回 0）"
                                },
                                "error返回值差异": {
                                    "type": 3,
                                    "desc": "app未授权定位：alipay返回错误码11, wx返回errMsg：'getLocation:fail 1', app授权，小程序弹框询问权限时拒绝：alipay返回错误码2001；wx返回errMsg: “getLocation:fail authorize no response”"
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "媒体",
            "type": "media",
            "body": {
                "compressImage": {
                    "status": 0,
                    "desc": "压缩图片接口，可选压缩质量",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html",
                        "alipay": "https://docs.alipay.com/mini/api/ehndze"
                    },
                    "body": { "msg": "封装后可完全支持" }
                }
            }
        },
        {
            "name": "网络",
            "type": "network",
            "body": {
                "request": {
                    "status": 1,
                    "desc": "发起 HTTPS 网络请求",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html",
                        "alipay": "https://docs.alipay.com/mini/api/owycmh"
                    },
                    "body": {
                        "msg": "入参参数名称差异/参数缺失/返回值名称差异",
                        "params": {
                            "props": {
                                "header": {
                                    "type": 1,
                                    "desc": "设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json, wx: header, alipay: headers"
                                },
                                "responseType": {
                                    "type": 0,
                                    "desc": "响应的数据类型, alipay缺失: responseType"
                                },
                                "method合法值": {
                                    "type": 0,
                                    "desc": "OPTIONS,HEAD,PUT,DELETE,TRACE,CONNECT"
                                }
                            }
                        },
                        "returnValue": {
                            "props": {
                                "statusCode": {
                                    "type": 1,
                                    "desc": "wx: statusCode, alipay: status"
                                },
                                "header": {
                                    "type": 1,
                                    "desc": "wx: header, alipay: headers"
                                }
                            }
                        }
                    }
                },
                "downloadFile": {
                    "status": 1,
                    "desc": "下载文件资源到本地",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html",
                        "alipay": "https://docs.alipay.com/mini/api/xr054r"
                    },
                    "body": {
                        "msg": "参数缺失, 返回值属性值/方法缺失, 返回值名称差异",
                        "params": {
                            "props": {
                                "filePath": {
                                    "type": 0,
                                    "desc": "指定文件下载后存储的路径"
                                }
                            }
                        },
                        "returnValue": {
                            "props": {
                                "tempFilePath": {
                                    "type": 1,
                                    "desc": "临时文件路径, wx: tempFilePath, alipay: apFilePath"
                                },
                                "filePath": {
                                    "type": 0,
                                    "desc": "用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致"
                                },
                                "statusCode": {
                                    "type": 0,
                                    "desc": "开发者服务器返回的 HTTP 状态码"
                                },
                                "abort": { "type": 0, "desc": "中断下载任务" },
                                "offHeadersReceived": {
                                    "type": 0,
                                    "desc": "监听下载进度变化事件"
                                },
                                "offProgressUpdate": {
                                    "type": 0,
                                    "desc": "取消监听下载进度变化事件"
                                },
                                "onHeadersReceived": {
                                    "type": 0,
                                    "desc": "监听 HTTP Response Header 事件。会比请求完成事件更早"
                                },
                                "onProgressUpdate": {
                                    "type": 0,
                                    "desc": "取消监听 HTTP Response Header 事件"
                                }
                            }
                        }
                    }
                },
                "uploadFile": {
                    "status": 1,
                    "desc": "上传本地资源到开发者服务器",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html",
                        "alipay": "https://docs.alipay.com/mini/api/kmq4hc"
                    },
                    "body": {
                        "msg": "参数名称差异, 返回值方法缺失",
                        "params": {
                            "props": {
                                "name": {
                                    "type": 1,
                                    "desc": "文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容, wx: name, alipay: fileName"
                                }
                            }
                        },
                        "returnValue": {
                            "props": {
                                "abort": { "type": 0, "desc": "missing" },
                                "offHeadersReceived": {
                                    "type": 0,
                                    "desc": "missing"
                                },
                                "offProgressUpdate": {
                                    "type": 0,
                                    "desc": "missing"
                                },
                                "onHeadersReceived": {
                                    "type": 0,
                                    "desc": "missing"
                                },
                                "onProgressUpdate": {
                                    "type": 0,
                                    "desc": "missing"
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "开放能力",
            "type": "openAbility",
            "body": {
                "login": {
                    "status": 0,
                    "desc": "调用接口获取登录凭证（code）",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html",
                        "alipay": "https://docs.alipay.com/mini/api/openapi-authorize"
                    },
                    "body": { "msg": "封装后完全支持" }
                },
                "getUserInfo": {
                    "status": 1,
                    "desc": "获取用户信息",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html",
                        "alipay": "https://docs.alipay.com/mini/api/userinfo"
                    },
                    "body": {
                        "msg": "命名不同, 参数缺失, 返回值属性缺失",
                        "params": {
                            "props": {
                                "getUserInfo": {
                                    "type": 1,
                                    "desc": "wx: getUserInfo, alipay: getAuthUserInfo"
                                },
                                "withCredentials": {
                                    "type": 0,
                                    "desc": "是否带上登录态信息"
                                },
                                "lang": {
                                    "type": 0,
                                    "desc": "显示用户信息的语言"
                                }
                            }
                        },
                        "returnValue": {
                            "props": {
                                "userInfo": {
                                    "type": 0,
                                    "desc": "用户信息对象，不包含 openid 等敏感信息"
                                },
                                "rawData": {
                                    "type": 0,
                                    "desc": "不包括敏感信息的原始数据字符串，用于计算签名"
                                },
                                "signature": {
                                    "type": 0,
                                    "desc": "使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息"
                                },
                                "encryptedData": {
                                    "type": 0,
                                    "desc": "包括敏感数据在内的完整用户信息的加密数据"
                                },
                                "iv": {
                                    "type": 0,
                                    "desc": "加密算法的初始向量"
                                },
                                "cloudID": {
                                    "type": 0,
                                    "desc": "敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据"
                                }
                            }
                        }
                    }
                },
                "reportAnalytics": {
                    "status": 0,
                    "desc": "自定义分析数据上报接口",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html",
                        "alipay": "https://docs.alipay.com/mini/api/report"
                    },
                    "body": { "msg": "封装后完全支持" }
                },
                "requestPayment": {
                    "status": 1,
                    "desc": "发起支付",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html",
                        "alipay": "https://docs.alipay.com/mini/api/openapi-pay"
                    },
                    "body": {
                        "msg": "命名不同wx: requestPayment, alipay: tradePay, 参数缺失",
                        "params": {
                            "props": {
                                "timeStamp": { "type": 0, "desc": "时间戳" },
                                "nonceStr": { "type": 0, "desc": "随机字符串" },
                                "package": {
                                    "type": 0,
                                    "desc": "统一下单接口返回的 prepay_id 参数值, 提交格式如：prepay_id=***"
                                },
                                "signType": { "type": 0, "desc": "签名算法" },
                                "paySign": { "type": 0, "desc": "签名" }
                            }
                        }
                    }
                },
                "authorize": {
                    "status": 1,
                    "desc": "提前向用户发起授权请求",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html",
                        "alipay": "https://docs.alipay.com/mini/api/openapi-authorize"
                    },
                    "body": {
                        "msg": "命名不同wx: authorize, alipay: getAuthCode, 参数差异",
                        "params": {
                            "props": {
                                "scope": {
                                    "type": 1,
                                    "desc": "授权类型, wx: scope, alipay: scopes, 且取值不同"
                                }
                            }
                        }
                    }
                },
                "getSetting": {
                    "status": 0,
                    "desc": "获取用户的当前设置",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html",
                        "alipay": "https://docs.alipay.com/mini/api/xmk3ml"
                    },
                    "body": {}
                }
            }
        },
        {
            "name": "界面",
            "type": "view",
            "body": {
                "showModal": {
                    "status": 1,
                    "desc": "显示模态对话框",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html",
                        "alipay": "https://docs.alipay.com/mini/api/lt3uqc"
                    },
                    "body": {
                        "msg": "入参参数名称差异/参数缺失/返回值名称差异",
                        "params": {
                            "props": {
                                "confirmText": {
                                    "type": 1,
                                    "desc": "确认按钮的文字，最多 4 个字符, wx: confirmText, alipay: confirmButtonText"
                                },
                                "cancelText": {
                                    "type": 1,
                                    "desc": "取消按钮的文字，最多 4 个字符, wx: cancelText, alipay: cancelButtonText"
                                },
                                "showCancel": {
                                    "type": 0,
                                    "desc": "是否显示取消按钮"
                                },
                                "cancelColor": {
                                    "type": 0,
                                    "desc": "取消按钮的文字颜色，必须是 16 进制格式的颜色字符串"
                                },
                                "confirmColor": {
                                    "type": 0,
                                    "desc": "确认按钮的文字颜色，必须是 16 进制格式的颜色字符串"
                                }
                            }
                        },
                        "returnValue": {
                            "props": {
                                "confirm": {
                                    "type": 1,
                                    "desc": "wx: 为true时，表示用户点击了确定按钮, alipay: 点击confirm返回true，点击cancel返回false"
                                },
                                "cancel": {
                                    "type": 1,
                                    "desc": "wx: 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）"
                                }
                            }
                        }
                    }
                },
                "showActionSheet": {
                    "status": 1,
                    "desc": "显示操作菜单",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html",
                        "alipay": "https://docs.alipay.com/mini/api/hr092g"
                    },
                    "body": {
                        "msg": "入参参数名称差异/参数缺失",
                        "params": {
                            "props": {
                                "itemList": {
                                    "type": 1,
                                    "desc": "按钮的文字数组, wx: itemList(数组长度最大为6), alipay: items"
                                },
                                "itemColor": {
                                    "type": 0,
                                    "desc": "按钮的文字颜色"
                                }
                            }
                        }
                    }
                },
                "setNavigationBarTitle": {
                    "status": 0,
                    "desc": "动态设置当前页面的标题",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html",
                        "alipay": "https://docs.alipay.com/mini/api/xwq8e6"
                    },
                    "body": {}
                },
                "pageScrollTo": {
                    "status": 1,
                    "desc": "将页面滚动到目标位置",
                    "url": {
                        "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html",
                        "alipay": "https://docs.alipay.com/mini/api/scroll#mypagescrollto"
                    },
                    "body": {
                        "msg": "参数缺失",
                        "params": {
                            "props": {
                                "duration": {
                                    "type": 0,
                                    "desc": "滚动动画的时长，单位 ms"
                                }
                            }
                        }
                    }
                }
            }
        }
    ],
    "descObject": {
        "canIUse": {
            "status": 0,
            "desc": "判断小程序的 API，回调，参数，组件等是否在当前版本可用",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html",
                "alipay": "https://docs.alipay.com/mini/api/can-i-use"
            },
            "body": {}
        },
        "getSystemInfo": {
            "status": 1,
            "desc": "获取系统信息",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html",
                "alipay": "https://docs.alipay.com/mini/api/system-info"
            },
            "body": {
                "msg": "返回值属性值缺失",
                "returnValue": {
                    "props": {
                        "SDKVersion": { "type": 0, "desc": "客户端基础库版本" },
                        "benchmarkLevel": {
                            "type": 0,
                            "desc": "仅 Android 小游戏 设备性能等级取值为：-2 或 0"
                        },
                        "albumAuthorized": {
                            "type": 0,
                            "desc": "允许微信使用相册的开关 仅 iOS 有效"
                        },
                        "cameraAuthorized": {
                            "type": 0,
                            "desc": "允许微信使用摄像头的开关"
                        },
                        "locationAuthorized": {
                            "type": 0,
                            "desc": "允许微信使用定位的开关"
                        },
                        "microphoneAuthorized": {
                            "type": 0,
                            "desc": "允许微信使用麦克风的开关"
                        },
                        "notificationAuthorized": {
                            "type": 0,
                            "desc": "允许微信通知的开关 仅 iOS 有效"
                        },
                        "notificationAlertAuthorized": {
                            "type": 0,
                            "desc": "允许微信通知带有提醒的开关 仅 iOS 有效"
                        },
                        "notificationBadgeAuthorized": {
                            "type": 0,
                            "desc": "允许微信通知带有标记的开关 仅 iOS 有效"
                        },
                        "notificationSoundAuthorized": {
                            "type": 0,
                            "desc": "允许微信通知带有声音的开关 仅 iOS 有效"
                        },
                        "bluetoothEnabled": {
                            "type": 0,
                            "desc": "蓝牙的系统开关"
                        },
                        "locationEnabled": {
                            "type": 0,
                            "desc": "地理位置的系统开关"
                        },
                        "wifiEnabled": { "type": 0, "desc": "Wi-Fi 的系统开关" }
                    }
                }
            }
        },
        "getNetworkType": {
            "status": 0,
            "desc": "获取网络类型",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html",
                "alipay": "https://docs.alipay.com/mini/api/network-status#mygetnetworktype"
            },
            "body": {
                "msg": "返回值属性差异",
                "returnValue": {
                    "props": {
                        "networkType": {
                            "type": 1,
                            "desc": "wx: wifi/2g/3g/4g/unknown/none, alipay: WIFI/2G/3G/4G/UNKNOWN/NOTREACHABLE"
                        }
                    }
                }
            }
        },
        "makePhoneCall": {
            "status": 1,
            "desc": "拨打电话",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html",
                "alipay": "https://docs.alipay.com/mini/api/macke-call"
            },
            "body": {
                "msg": "封装后不支持回调",
                "params": {
                    "props": {
                        "success": {
                            "type": 0,
                            "desc": "接口调用成功的回调函数"
                        },
                        "fail": { "type": 0, "desc": "接口调用失败的回调函数" },
                        "complete": {
                            "type": 0,
                            "desc": "接口调用结束的回调函数（调用成功、失败都会执行）"
                        }
                    }
                }
            }
        },
        "openLocation": {
            "status": 0,
            "desc": "打开位置",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html",
                "alipay": "https://docs.alipay.com/mini/api/as9kin"
            },
            "body": {}
        },
        "getLocation": {
            "status": 1,
            "desc": "获取位置",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html",
                "alipay": "https://docs.alipay.com/mini/api/mkxuqd"
            },
            "body": {
                "msg": "参数缺失, 参数type的取值/默认值差异, 返回值缺失/差异",
                "params": {
                    "props": {
                        "altitude": {
                            "type": 0,
                            "desc": "传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度"
                        },
                        "type的取值": {
                            "type": 4,
                            "desc": "wx: 默认值wgs84, alipay: 默认值0"
                        }
                    }
                },
                "returnValue": {
                    "props": {
                        "speed": { "type": 0, "desc": "速度，单位 m/s" },
                        "altitude": { "type": 0, "desc": "高度，单位 m" },
                        "verticalAccuracy": {
                            "type": 0,
                            "desc": "垂直精度，单位 m（Android 无法获取，返回 0）"
                        },
                        "error返回值差异": {
                            "type": 3,
                            "desc": "app未授权定位：alipay返回错误码11, wx返回errMsg：'getLocation:fail 1', app授权，小程序弹框询问权限时拒绝：alipay返回错误码2001；wx返回errMsg: “getLocation:fail authorize no response”"
                        }
                    }
                }
            }
        },
        "compressImage": {
            "status": 0,
            "desc": "压缩图片接口，可选压缩质量",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html",
                "alipay": "https://docs.alipay.com/mini/api/ehndze"
            },
            "body": { "msg": "封装后可完全支持" }
        },
        "request": {
            "status": 1,
            "desc": "发起 HTTPS 网络请求",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html",
                "alipay": "https://docs.alipay.com/mini/api/owycmh"
            },
            "body": {
                "msg": "入参参数名称差异/参数缺失/返回值名称差异",
                "params": {
                    "props": {
                        "header": {
                            "type": 1,
                            "desc": "设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json, wx: header, alipay: headers"
                        },
                        "responseType": {
                            "type": 0,
                            "desc": "响应的数据类型, alipay缺失: responseType"
                        },
                        "method合法值": {
                            "type": 0,
                            "desc": "OPTIONS,HEAD,PUT,DELETE,TRACE,CONNECT"
                        }
                    }
                },
                "returnValue": {
                    "props": {
                        "statusCode": {
                            "type": 1,
                            "desc": "wx: statusCode, alipay: status"
                        },
                        "header": {
                            "type": 1,
                            "desc": "wx: header, alipay: headers"
                        }
                    }
                }
            }
        },
        "downloadFile": {
            "status": 1,
            "desc": "下载文件资源到本地",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html",
                "alipay": "https://docs.alipay.com/mini/api/xr054r"
            },
            "body": {
                "msg": "参数缺失, 返回值属性值/方法缺失, 返回值名称差异",
                "params": {
                    "props": {
                        "filePath": {
                            "type": 0,
                            "desc": "指定文件下载后存储的路径"
                        }
                    }
                },
                "returnValue": {
                    "props": {
                        "tempFilePath": {
                            "type": 1,
                            "desc": "临时文件路径, wx: tempFilePath, alipay: apFilePath"
                        },
                        "filePath": {
                            "type": 0,
                            "desc": "用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致"
                        },
                        "statusCode": {
                            "type": 0,
                            "desc": "开发者服务器返回的 HTTP 状态码"
                        },
                        "abort": { "type": 0, "desc": "中断下载任务" },
                        "offHeadersReceived": {
                            "type": 0,
                            "desc": "监听下载进度变化事件"
                        },
                        "offProgressUpdate": {
                            "type": 0,
                            "desc": "取消监听下载进度变化事件"
                        },
                        "onHeadersReceived": {
                            "type": 0,
                            "desc": "监听 HTTP Response Header 事件。会比请求完成事件更早"
                        },
                        "onProgressUpdate": {
                            "type": 0,
                            "desc": "取消监听 HTTP Response Header 事件"
                        }
                    }
                }
            }
        },
        "uploadFile": {
            "status": 1,
            "desc": "上传本地资源到开发者服务器",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html",
                "alipay": "https://docs.alipay.com/mini/api/kmq4hc"
            },
            "body": {
                "msg": "参数名称差异, 返回值方法缺失",
                "params": {
                    "props": {
                        "name": {
                            "type": 1,
                            "desc": "文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容, wx: name, alipay: fileName"
                        }
                    }
                },
                "returnValue": {
                    "props": {
                        "abort": { "type": 0, "desc": "missing" },
                        "offHeadersReceived": { "type": 0, "desc": "missing" },
                        "offProgressUpdate": { "type": 0, "desc": "missing" },
                        "onHeadersReceived": { "type": 0, "desc": "missing" },
                        "onProgressUpdate": { "type": 0, "desc": "missing" }
                    }
                }
            }
        },
        "login": {
            "status": 0,
            "desc": "调用接口获取登录凭证（code）",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html",
                "alipay": "https://docs.alipay.com/mini/api/openapi-authorize"
            },
            "body": { "msg": "封装后完全支持" }
        },
        "getUserInfo": {
            "status": 1,
            "desc": "获取用户信息",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html",
                "alipay": "https://docs.alipay.com/mini/api/userinfo"
            },
            "body": {
                "msg": "命名不同, 参数缺失, 返回值属性缺失",
                "params": {
                    "props": {
                        "getUserInfo": {
                            "type": 1,
                            "desc": "wx: getUserInfo, alipay: getAuthUserInfo"
                        },
                        "withCredentials": {
                            "type": 0,
                            "desc": "是否带上登录态信息"
                        },
                        "lang": { "type": 0, "desc": "显示用户信息的语言" }
                    }
                },
                "returnValue": {
                    "props": {
                        "userInfo": {
                            "type": 0,
                            "desc": "用户信息对象，不包含 openid 等敏感信息"
                        },
                        "rawData": {
                            "type": 0,
                            "desc": "不包括敏感信息的原始数据字符串，用于计算签名"
                        },
                        "signature": {
                            "type": 0,
                            "desc": "使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息"
                        },
                        "encryptedData": {
                            "type": 0,
                            "desc": "包括敏感数据在内的完整用户信息的加密数据"
                        },
                        "iv": { "type": 0, "desc": "加密算法的初始向量" },
                        "cloudID": {
                            "type": 0,
                            "desc": "敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据"
                        }
                    }
                }
            }
        },
        "reportAnalytics": {
            "status": 0,
            "desc": "自定义分析数据上报接口",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html",
                "alipay": "https://docs.alipay.com/mini/api/report"
            },
            "body": { "msg": "封装后完全支持" }
        },
        "requestPayment": {
            "status": 1,
            "desc": "发起支付",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html",
                "alipay": "https://docs.alipay.com/mini/api/openapi-pay"
            },
            "body": {
                "msg": "命名不同wx: requestPayment, alipay: tradePay, 参数缺失",
                "params": {
                    "props": {
                        "timeStamp": { "type": 0, "desc": "时间戳" },
                        "nonceStr": { "type": 0, "desc": "随机字符串" },
                        "package": {
                            "type": 0,
                            "desc": "统一下单接口返回的 prepay_id 参数值, 提交格式如：prepay_id=***"
                        },
                        "signType": { "type": 0, "desc": "签名算法" },
                        "paySign": { "type": 0, "desc": "签名" }
                    }
                }
            }
        },
        "authorize": {
            "status": 1,
            "desc": "提前向用户发起授权请求",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html",
                "alipay": "https://docs.alipay.com/mini/api/openapi-authorize"
            },
            "body": {
                "msg": "命名不同wx: authorize, alipay: getAuthCode, 参数差异",
                "params": {
                    "props": {
                        "scope": {
                            "type": 1,
                            "desc": "授权类型, wx: scope, alipay: scopes, 且取值不同"
                        }
                    }
                }
            }
        },
        "getSetting": {
            "status": 0,
            "desc": "获取用户的当前设置",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html",
                "alipay": "https://docs.alipay.com/mini/api/xmk3ml"
            },
            "body": {}
        },
        "showModal": {
            "status": 1,
            "desc": "显示模态对话框",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html",
                "alipay": "https://docs.alipay.com/mini/api/lt3uqc"
            },
            "body": {
                "msg": "入参参数名称差异/参数缺失/返回值名称差异",
                "params": {
                    "props": {
                        "confirmText": {
                            "type": 1,
                            "desc": "确认按钮的文字，最多 4 个字符, wx: confirmText, alipay: confirmButtonText"
                        },
                        "cancelText": {
                            "type": 1,
                            "desc": "取消按钮的文字，最多 4 个字符, wx: cancelText, alipay: cancelButtonText"
                        },
                        "showCancel": { "type": 0, "desc": "是否显示取消按钮" },
                        "cancelColor": {
                            "type": 0,
                            "desc": "取消按钮的文字颜色，必须是 16 进制格式的颜色字符串"
                        },
                        "confirmColor": {
                            "type": 0,
                            "desc": "确认按钮的文字颜色，必须是 16 进制格式的颜色字符串"
                        }
                    }
                },
                "returnValue": {
                    "props": {
                        "confirm": {
                            "type": 1,
                            "desc": "wx: 为true时，表示用户点击了确定按钮, alipay: 点击confirm返回true，点击cancel返回false"
                        },
                        "cancel": {
                            "type": 1,
                            "desc": "wx: 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）"
                        }
                    }
                }
            }
        },
        "showActionSheet": {
            "status": 1,
            "desc": "显示操作菜单",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html",
                "alipay": "https://docs.alipay.com/mini/api/hr092g"
            },
            "body": {
                "msg": "入参参数名称差异/参数缺失",
                "params": {
                    "props": {
                        "itemList": {
                            "type": 1,
                            "desc": "按钮的文字数组, wx: itemList(数组长度最大为6), alipay: items"
                        },
                        "itemColor": { "type": 0, "desc": "按钮的文字颜色" }
                    }
                }
            }
        },
        "setNavigationBarTitle": {
            "status": 0,
            "desc": "动态设置当前页面的标题",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html",
                "alipay": "https://docs.alipay.com/mini/api/xwq8e6"
            },
            "body": {}
        },
        "pageScrollTo": {
            "status": 1,
            "desc": "将页面滚动到目标位置",
            "url": {
                "wechat": "https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html",
                "alipay": "https://docs.alipay.com/mini/api/scroll#mypagescrollto"
            },
            "body": {
                "msg": "参数缺失",
                "params": {
                    "props": {
                        "duration": {
                            "type": 0,
                            "desc": "滚动动画的时长，单位 ms"
                        }
                    }
                }
            }
        }
    }
};
