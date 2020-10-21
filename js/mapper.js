function getMarkers(startDate, endDate) {
  let markerArr = []
  let info = data.statistics

  if (startDate !== undefined && endDate !== undefined) {
    const start = moment(startDate)
    const end = moment(endDate)

    info = info.filter((day) => {
      let dayDate = moment(day.date)
      return dayDate >= start && dayDate <= end
    })
  }

  let location = data.municipalities
  info.forEach((day) => {
    day.events.forEach((event) => {
      event.data.forEach((municipality) => {
        let marker = markerArr.find(
          (item) =>
            item.name === municipality.municipality && item.group === event.name
        )
        if (marker) {
          //If exist even+munipality add usercount
          marker.size = parseInt(marker.size) + parseInt(municipality.userCount)
        } else {
          // If not add information for the marker
          let locationTmp = location.find(
            (loc) => loc.name === municipality.municipality
          )
          markerArr.push({
            name: municipality.municipality,
            long: locationTmp.longitude,
            lat: locationTmp.latitude,
            group: event.name,
            size: municipality.userCount,
          })
        }
      })
    })
  })
  return markerArr
}

function colorScale() {
  return {
    groups: events,
    colors: events.map(
      (element) => '#' + Math.floor(Math.random() * 16777215).toString(16)
    ),
  }
}

const events = [
  'screen_view',
  'session_start',
  'user_engagement',
  'SIGN_IN',
  'SIGN_OUT',
  'PREDICTION_REQUEST',
  'PREDICTION_SUCCESS',
  'app_update',
  'os_update',
  'notification_foreground',
  'notification_open',
  'CHAT_CONVERSATION_STARTED',
  'CHAT_MESSAGE_SENT',
  'notification_receive',
  'app_remove',
  'notification_dismiss',
]

const data = {
  municipalities: [
    {
      name: 'Malm\u00f6',
      latitude: 55.6143688,
      longitude: 12.9886738,
    },
    {
      name: 'N\u00f8rrebro',
      latitude: 55.704655,
      longitude: 12.536947,
    },
    {
      name: 'Uddevalla',
      latitude: 58.3491,
      longitude: 11.9383,
    },
    {
      name: 'Nybro',
      latitude: 56.7452,
      longitude: 15.9062,
    },
    {
      name: 'Vimmerby',
      latitude: 57.6653,
      longitude: 15.8563,
    },
    {
      name: 'Vetlanda',
      latitude: 57.426,
      longitude: 15.087,
    },
    {
      name: 'M\u00f6nster\u00e5s',
      latitude: 57.043,
      longitude: 16.4448,
    },
    {
      name: 'Soten\u00e4s',
      latitude: 58.3608,
      longitude: 11.2511,
    },
  ],
  statistics: [
    {
      date: '20190926',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 15,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 9,
            },
          ],
        },
      ],
    },
    {
      date: '20190927',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 27,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 18,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
      ],
    },
    {
      date: '20191001',
      events: [
        {
          name: 'SIGN_IN',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'SIGN_OUT',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 5,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 16,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 8,
            },
          ],
        },
      ],
    },
    {
      date: '20191002',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 11,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 5,
            },
          ],
        },
      ],
    },
    {
      date: '20191004',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 11,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 7,
            },
          ],
        },
      ],
    },
    {
      date: '20191005',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
      ],
    },
    {
      date: '20191007',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 11,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 11,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 79,
            },
            {
              municipality: 'Uddevalla',
              userCount: 12,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 8,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 61,
            },
            {
              municipality: 'Uddevalla',
              userCount: 14,
            },
          ],
        },
      ],
    },
    {
      date: '20191008',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
          ],
        },
        {
          name: 'SIGN_IN',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'SIGN_OUT',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 45,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 47,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 25,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 25,
            },
          ],
        },
      ],
    },
    {
      date: '20191009',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 12,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 12,
            },
          ],
        },
        {
          name: 'SIGN_IN',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
        {
          name: 'SIGN_OUT',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'app_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 271,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 138,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 7,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 5,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 181,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 91,
            },
          ],
        },
      ],
    },
    {
      date: '20191010',
      events: [
        {
          name: 'app_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 20,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 18,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 14,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 14,
            },
          ],
        },
      ],
    },
    {
      date: '20191011',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 11,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 5,
            },
          ],
        },
      ],
    },
    {
      date: '20191012',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 26,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 6,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 16,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
      ],
    },
    {
      date: '20191013',
      events: [
        {
          name: 'os_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 9,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 5,
            },
          ],
        },
      ],
    },
    {
      date: '20191014',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 6,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 6,
            },
          ],
        },
        {
          name: 'notification_foreground',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'os_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 133,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 23,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 9,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 98,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 10,
            },
          ],
        },
      ],
    },
    {
      date: '20191015',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'notification_foreground',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'os_update',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 53,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 57,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 4,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 39,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 36,
            },
          ],
        },
      ],
    },
    {
      date: '20191016',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 15,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 9,
            },
          ],
        },
      ],
    },
    {
      date: '20191017',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'SIGN_IN',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 4,
            },
          ],
        },
        {
          name: 'app_update',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'os_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 35,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 69,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 4,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 25,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 49,
            },
          ],
        },
      ],
    },
    {
      date: '20191018',
      events: [
        {
          name: 'SIGN_IN',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'app_update',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 24,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 30,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 4,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 15,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 17,
            },
          ],
        },
      ],
    },
    {
      date: '20191021',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 16,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 17,
            },
          ],
        },
      ],
    },
    {
      date: '20191022',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'app_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_foreground',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 63,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 66,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 4,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 36,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 46,
            },
          ],
        },
      ],
    },
    {
      date: '20191023',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
      ],
    },
    {
      date: '20191024',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'os_update',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 28,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 8,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 16,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 4,
            },
          ],
        },
      ],
    },
    {
      date: '20191025',
      events: [
        {
          name: 'os_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 73,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 6,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 47,
            },
          ],
        },
      ],
    },
    {
      date: '20191028',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'app_update',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'os_update',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 9,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 34,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 8,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 21,
            },
          ],
        },
      ],
    },
    {
      date: '20191029',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
          ],
        },
        {
          name: 'SIGN_OUT',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 23,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 15,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 15,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 10,
            },
          ],
        },
      ],
    },
    {
      date: '20191030',
      events: [
        {
          name: 'SIGN_IN',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 38,
            },
            {
              municipality: 'Uddevalla',
              userCount: 6,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 26,
            },
            {
              municipality: 'Uddevalla',
              userCount: 7,
            },
          ],
        },
      ],
    },
    {
      date: '20191031',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 60,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 6,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 39,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
      ],
    },
    {
      date: '20191101',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 12,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 24,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 6,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 16,
            },
          ],
        },
      ],
    },
    {
      date: '20191104',
      events: [
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'os_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 45,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 23,
            },
          ],
        },
      ],
    },
    {
      date: '20191105',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 7,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 7,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 62,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 11,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 39,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 6,
            },
          ],
        },
      ],
    },
    {
      date: '20191106',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 8,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 7,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 107,
            },
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 8,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 7,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 85,
            },
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 7,
            },
          ],
        },
      ],
    },
    {
      date: '20191107',
      events: [
        {
          name: 'CHAT_CONVERSATION_STARTED',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'SIGN_IN',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'SIGN_OUT',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'app_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'notification_receive',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Nybro',
              userCount: 39,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 25,
            },
            {
              municipality: 'Uddevalla',
              userCount: 13,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 29,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
            {
              municipality: 'Uddevalla',
              userCount: 3,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 48,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 17,
            },
            {
              municipality: 'Uddevalla',
              userCount: 14,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 19,
            },
          ],
        },
      ],
    },
    {
      date: '20191108',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
            {
              municipality: 'Vimmerby',
              userCount: 1,
            },
          ],
        },
        {
          name: 'app_update',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'notification_receive',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Nybro',
              userCount: 6,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 81,
            },
            {
              municipality: 'Uddevalla',
              userCount: 10,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 6,
            },
            {
              municipality: 'Vetlanda',
              userCount: 2,
            },
            {
              municipality: 'Vimmerby',
              userCount: 12,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 5,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 7,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 56,
            },
            {
              municipality: 'Uddevalla',
              userCount: 14,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
            {
              municipality: 'Vetlanda',
              userCount: 2,
            },
            {
              municipality: 'Vimmerby',
              userCount: 15,
            },
          ],
        },
      ],
    },
    {
      date: '20191111',
      events: [
        {
          name: 'CHAT_CONVERSATION_STARTED',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Nybro',
              userCount: 3,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Nybro',
              userCount: 3,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'SIGN_OUT',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_receive',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Nybro',
              userCount: 44,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 42,
            },
            {
              municipality: 'Uddevalla',
              userCount: 6,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 35,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 3,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 45,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 26,
            },
            {
              municipality: 'Uddevalla',
              userCount: 5,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 22,
            },
          ],
        },
      ],
    },
    {
      date: '20191112',
      events: [
        {
          name: 'CHAT_CONVERSATION_STARTED',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 14,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 3,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'SIGN_OUT',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
          ],
        },
        {
          name: 'app_remove',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
          ],
        },
        {
          name: 'notification_foreground',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'os_update',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 10,
            },
            {
              municipality: 'Soten\u00e4s',
              userCount: 7,
            },
            {
              municipality: 'Uddevalla',
              userCount: 245,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 105,
            },
            {
              municipality: 'Vetlanda',
              userCount: 4,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
            {
              municipality: 'Uddevalla',
              userCount: 6,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
            {
              municipality: 'Vetlanda',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 7,
            },
            {
              municipality: 'Soten\u00e4s',
              userCount: 7,
            },
            {
              municipality: 'Uddevalla',
              userCount: 258,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 65,
            },
            {
              municipality: 'Vetlanda',
              userCount: 4,
            },
          ],
        },
      ],
    },
    {
      date: '20191113',
      events: [
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'SIGN_OUT',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_receive',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Nybro',
              userCount: 18,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 21,
            },
            {
              municipality: 'Uddevalla',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 34,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 19,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 12,
            },
            {
              municipality: 'Uddevalla',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 36,
            },
          ],
        },
      ],
    },
    {
      date: '20191114',
      events: [
        {
          name: 'CHAT_CONVERSATION_STARTED',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
            {
              municipality: 'Uddevalla',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_dismiss',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_receive',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Nybro',
              userCount: 22,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 44,
            },
            {
              municipality: 'Uddevalla',
              userCount: 27,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 33,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 4,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
            {
              municipality: 'Uddevalla',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 28,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 28,
            },
            {
              municipality: 'Uddevalla',
              userCount: 26,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 20,
            },
          ],
        },
      ],
    },
    {
      date: '20191115',
      events: [
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Nybro',
              userCount: 3,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 30,
            },
            {
              municipality: 'Uddevalla',
              userCount: 16,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 2,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 18,
            },
            {
              municipality: 'Uddevalla',
              userCount: 16,
            },
          ],
        },
      ],
    },
    {
      date: '20191116',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 7,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 6,
            },
          ],
        },
      ],
    },
    {
      date: '20191117',
      events: [
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
      ],
    },
    {
      date: '20191118',
      events: [
        {
          name: 'CHAT_CONVERSATION_STARTED',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Nybro',
              userCount: 5,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Nybro',
              userCount: 5,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 3,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Nybro',
              userCount: 60,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 62,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 10,
            },
            {
              municipality: 'Vetlanda',
              userCount: 2,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 8,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
            {
              municipality: 'Vetlanda',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 64,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 42,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 5,
            },
            {
              municipality: 'Vetlanda',
              userCount: 2,
            },
          ],
        },
      ],
    },
    {
      date: '20191119',
      events: [
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 2,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 2,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 2,
            },
          ],
        },
        {
          name: 'os_update',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 52,
            },
            {
              municipality: 'Nybro',
              userCount: 17,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 33,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 6,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 4,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 34,
            },
            {
              municipality: 'Nybro',
              userCount: 16,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 22,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 3,
            },
          ],
        },
      ],
    },
    {
      date: '20191120',
      events: [
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'Nybro',
              userCount: 11,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 138,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'Nybro',
              userCount: 3,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 5,
            },
            {
              municipality: 'Uddevalla',
              userCount: 1,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'Nybro',
              userCount: 16,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 94,
            },
          ],
        },
      ],
    },
    {
      date: '20191121',
      events: [
        {
          name: 'CHAT_CONVERSATION_STARTED',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 1,
            },
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 2,
            },
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 2,
            },
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 2,
            },
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_open',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'notification_receive',
          data: [
            {
              municipality: 'Nybro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 26,
            },
            {
              municipality: 'Nybro',
              userCount: 22,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 36,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 14,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 1,
            },
            {
              municipality: 'Nybro',
              userCount: 2,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 5,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 17,
            },
            {
              municipality: 'Nybro',
              userCount: 19,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 26,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 17,
            },
          ],
        },
      ],
    },
    {
      date: '20191122',
      events: [
        {
          name: 'CHAT_MESSAGE_SENT',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_REQUEST',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'PREDICTION_SUCCESS',
          data: [
            {
              municipality: 'Malm\u00f6',
              userCount: 1,
            },
          ],
        },
        {
          name: 'app_remove',
          data: [
            {
              municipality: 'N\u00f8rrebro',
              userCount: 1,
            },
          ],
        },
        {
          name: 'screen_view',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 15,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 183,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 6,
            },
          ],
        },
        {
          name: 'session_start',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 1,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 9,
            },
          ],
        },
        {
          name: 'user_engagement',
          data: [
            {
              municipality: 'M\u00f6nster\u00e5s',
              userCount: 10,
            },
            {
              municipality: 'Malm\u00f6',
              userCount: 128,
            },
            {
              municipality: 'N\u00f8rrebro',
              userCount: 8,
            },
          ],
        },
      ],
    },
  ],
}
