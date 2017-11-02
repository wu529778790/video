<template>
  <div class="video">
    <div class="container">
      <iframe :src="src" width="99%" height="500px;" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <div class="url_head">
        <label for="url" class="title">请在下面输入您要播放的vip视频地址：</label><br />
        <input type="text" v-model="url" id="url" placeholder="请再次输入您要解析的会员地址" class="input is-primary is-large">
      </div>
      <div style="padding: 10px 0;">
        <a class="button is-primary" @click="removeUrl">清空地址栏</a>
        <a class="button is-primary" @click="refresh">点击我刷新</a>
      </div>
      <label for="selected" class="title">接口选择</label>
      <div class="select is-primary">
        <select v-model="selected" id="selected">
          <option v-for="option in options" :value="option.value">{{option.name}}</option>
        </select>
      </div>
    </div>
    <div class="bottom">
    </div>
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      src: '',
      url: '' || 'http://v.youku.com/v_show/id_XMzA4MjMyOTA1Ng==.html',
      selected: 'http://api.baiyug.cn/vip/index.php?url=',
      options: [
        {
          value: 'http://api.baiyug.cn/vip/index.php?url=',
          name: '接口一'
        },
        {
          value: 'http://api.1008net.com/v.php?url=',
          name: '接口二'
        },
        {
          value: 'http://api.nepian.com/ckparse/?url=',
          name: '接口三'
        },
        {
          value: 'http://player.jidiaose.com/supapi/iframe.php?v=',
          name: '接口四'
        },
        {
          value: 'http://api.pucms.com/index.php?url=',
          name: '接口五'
        },
        {
          value: 'http://api.wlzhan.com/sudu/?url=',
          name: '接口六'
        },
        {
          value: 'http://www.0335haibo.com/yun.php?url=',
          name: '接口七'
        },
        {
          value: 'http://yun.mt2t.com/yun?url=',
          name: '接口八'
        },
        {
          value: 'http://y.mt2t.com/lines?url=',
          name: '接口九'
        },
        {
          value: 'http://www.0335haibo.com/yun.php?url=',
          name: '接口十'
        },
        {
          value: 'http://www.sfsft.com/video.php?url=',
          name: '接口十一'
        },
        {
          value: 'http://www.82190555.com/video.php?url=',
          name: '接口十二'
        },
        {
          value: 'http://2.jx.72du.com/video.php?url=',
          name: '接口十三'
        },
        {
          value: 'http://www.97panda.com/kkflv/index.php?url=',
          name: '接口十四'
        },
        {
          value: 'http://jx.vgoodapi.com/jx.php?url=',
          name: '接口十五'
        },
        {
          value: 'http://www.dgua.xyz/webcloud/?url=',
          name: '接口十六'
        },
        {
          value: 'http://api.91exp.com/svip/?url=',
          name: '接口十七'
        },
        {
          value: 'http://vip.jlsprh.com/index.php?url=',
          name: '接口十八'
        },
        {
          value: 'http://api.xfsub.com/index.php?url=',
          name: '接口十九'
        },
        {
          value: 'http://jiexi.92fz.cn/player/vip.php?url=',
          name: '接口二十'
        },
        {
          value: 'http://api.baiyug.cn/vip/index.php?url=',
          name: '接口二十一'
        },
        {
          value: 'http://api.662820.com/xnflv/index.php?url=',
          name: '接口二十二'
        },
        {
          value: 'http://www.82190555.com/index/qqvod.php?url=',
          name: '接口二十三'
        },
        {
          value: 'http://yyygwz.com/index.php?url=',
          name: '接口二十四'
        },
        {
          value: 'http://www.97panda.com/kkflv/index.php?url=',
          name: '接口二十五'
        },
        {
          value: 'http://jx.api.163ren.com/vod.php?url=',
          name: '接口二十六'
        },
        {
          value: 'http://lookxw.com/yingzi/?url=',
          name: '接口二十七'
        },
        {
          value: 'http://www.0335haibo.com/tong.php?url=',
          name: '接口二十八'
        },
        {
          value: 'http://www.wmxz.wang/video.php?url=',
          name: '接口二十九'
        },
        {
          value: 'http://api.97kn.com/?url=',
          name: '接口三十'
        },
        {
          value: 'https://aikanapi.duapp.com/odflv105/index.php?url=',
          name: '接口三十一'
        },
        {
          value: 'http://v.buy360.vip/wwcx/index.php?url=',
          name: '接口三十二'
        },
        {
          value: 'http://api.lequgirl.com/?url=',
          name: '接口三十三'
        },
        {
          value: 'https://jxapi.nepian.com/ckparse/?url=',
          name: '接口三十四'
        },
        {
          value: 'http://91k.co/play.php?url=',
          name: '接口三十五'
        },
        {
          value: 'http://www.52jiexi.com/yun.php?url=',
          name: '接口三十六'
        },
        {
          value: 'http://mt2t.com/yun?url=',
          name: '接口三十七'
        },
        {
          value: 'http://000o.cc/jx/ty.php?url=',
          name: '接口三十八'
        },
        {
          value: 'http://yyygwz.com/index.php?url=',
          name: '接口三十九'
        },
        {
          value: 'http://vipjiexi.com/vip.php?url=',
          name: '接口四十'
        },
        {
          value: 'http://www.wmxz.wang/video.php?url=',
          name: '接口四十一'
        },
        {
          value: 'http://jx.ck921.com/?url=',
          name: '接口四十二'
        },
        {
          value: 'http://s1y2.com/?url=',
          name: '接口四十三'
        },
        {
          value: 'http://www.ou522.cn/t2/1.php?url=',
          name: '接口四十四'
        },
        {
          value: 'http://jx.xuanpianwang.com/parse?url=',
          name: '接口四十五'
        },
        {
          value: 'https://apiv.ga/magnet/',
          name: '接口四十六'
        },
        {
          value: 'http://jiexi.92fz.cn/player/vip.php?url=',
          name: '接口四十七'
        }
      ]
    }
  },
  methods: {
    player () {
      this.src = this.selected + this.url
    },
    removeUrl () {
      this.url = ''
    },
    refresh () {
      location.reload()
    }
  },
  created () {
    this.player()
  },
  watch: {
    selected (value, oldValue) {
      this.src = value + this.url
      console.log(this.src)
    },
    url (value, oldValue) {
      this.src = this.selected + value
      console.log(this.src)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// .video {
//   .url_head {
//     #url {
//       width: 99%;
//       padding: 5px;
//       box-sizing: border-box;
//       border: 1px solid grey;
//     }
//   }
//   #selected {
//     border: 1px solid grey;
//   }
// }
</style>
