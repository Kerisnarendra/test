# Sample Data
```json
{
  "results": [
    {
      "rows": [
        {
          "MEETING_WEBINAR_ID": "7257765871",
          "INSTANCE_ID": "MRfbrtYEaIkgW6A7WBsg",
          "INTERACTION_TYPE": 0,
          "AUDIO_MOS_AVERAGE": 3.347712453,
          "HOST_ID": "Fx18lPlkSyUmxBGCyv3cbQ",
          "HOST": "Kerisnarendra",
          "ASSISTANT_ID": "",
          "TOPIC": "Review",
          "STATUS": "past"
        },
        {
          "MEETING_WEBINAR_ID": "87466388581",
          "INSTANCE_ID": "MurVOlQPCBmhOcF3JvdQ",
          "INTERACTION_TYPE": 0,
          "AUDIO_MOS_AVERAGE": 3.347712453,
          "HOST_ID": "1jFcjdYmTw2W9RR4A2JwbQ",
          "HOST": "John",
          "ASSISTANT_ID": "",
          "TOPIC": "Interview",
          "STATUS": "past",
          "START_TIME": "2021-03-02T13:30:03",
          "END_TIME": "2021-03-02T14:57:27",
          "DURATION": 5244000
        }
      ],
      "count": 2,
      "id": "troubleshooting_zoom_meeting_webinar_instances"
    }
  ]
}
```

## Requirement
Convert json above to html table like below:

| MEETING_WEBINAR_ID | INSTANCE_ID            | INTERACTION_TYPE | AUDIO_MOS_AVERAGE | HOST_ID                | HOST          | ASSISTANT_ID | TOPIC     | STATUS | START_TIME          | END_TIME            | DURATION |
|--------------------|------------------------|------------------|-------------------|------------------------|---------------|--------------|-----------|--------|---------------------|---------------------|----------|
| 7257765871         | MRfbrtYEaIkgW6A7WBsg | 0                | 3.347712453       | Fx18lPlkSyUmxBGCyv3cbQ | Kerisnarendra |              | Review    | past   |                     |                     |          |
| 87466388581        | MurVOlQPCBmhOcF3JvdQ | 0                | 3.347712453       | 1jFcjdYmTw2W9RR4A2JwbQ | John          |              | Interview | past   | 2021-03-02T13:30:03 | 2021-03-02T14:57:27 | 5244000  |




