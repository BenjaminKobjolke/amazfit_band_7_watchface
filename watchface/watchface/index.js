
    /*
    ** Watch_Face_Editor tool
    ** watchface js version v1.0.1
    ** Copyright © CashaCX75. All Rights Reserved
    */

    try {

      (() => {

        var __$$app$$__ = __$$hmAppManager$$__.currentApp;
        var __$$module$$__ = __$$app$$__.current;
        //drink is a name,can modify
        var h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__), 'drink');

        'use strict';

        //dynamic modify start

        
        let normal_background_bg_img = ''
        let editBg = ''
        let normal_step_current_text_img = ''
        let normal_digital_clock_img_time = ''
        let idle_digital_clock_img_time = ''


        //dynamic modify end

        //not required
        const logger = DeviceRuntimeCore.HmLogger.getLogger("yeguang");

        __$$module$$__.module = DeviceRuntimeCore.WatchFace({

          init_view() {

            //dynamic modify start
                    
            
            normal_background_bg_img = hmUI.createWidget(hmUI.widget.FILL_RECT, {
              x: 0,
              y: 0,
              w: 194,
              h: 368,
              color: '0xFF000000',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });
            editBg = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_BG, {
            });

            normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 24,
              y: 300,
              font_array: ["small_00.png","small_01.png","small_02.png","small_03.png","small_04.png","small_05.png","small_06.png","small_07.png","small_08.png","small_09.png"],
              padding: true,
              h_space: 0,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 36,
              hour_startY: 38,
              hour_array: ["time_00.png","time_01.png","time_02.png","time_03.png","time_04.png","time_05.png","time_06.png","time_07.png","time_08.png","time_09.png"],
              hour_zero: 1,
              hour_space: 5,
              hour_align: hmUI.align.LEFT,

              minute_startX: 36,
              minute_startY: 126,
              minute_array: ["time_00.png","time_01.png","time_02.png","time_03.png","time_04.png","time_05.png","time_06.png","time_07.png","time_08.png","time_09.png"],
              minute_zero: 1,
              minute_space: 5,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_NORMAL,
            });



            idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 36,
              hour_startY: 38,
              hour_array: ["time_00.png","time_01.png","time_02.png","time_03.png","time_04.png","time_05.png","time_06.png","time_07.png","time_08.png","time_09.png"],
              hour_zero: 1,
              hour_space: 5,
              hour_align: hmUI.align.LEFT,

              minute_startX: 36,
              minute_startY: 126,
              minute_array: ["time_00.png","time_01.png","time_02.png","time_03.png","time_04.png","time_05.png","time_06.png","time_07.png","time_08.png","time_09.png"],
              minute_zero: 1,
              minute_space: 5,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_AOD,
            });


            //dynamic modify end
          },

          onInit() {
            console.log('index page.js on init invoke')

            this.init_view()

          },

          onReady() {
            console.log('index page.js on ready invoke')
          },

          onShow() {
            console.log('index page.js on show invoke')
          },

          onHide() {
            console.log('index page.js on hide invoke')
          },

          onDestory() {
            console.log('index page.js on destory invoke')
          },
        });

      })()
    } catch (e) {
      console.log(e)
    }
  