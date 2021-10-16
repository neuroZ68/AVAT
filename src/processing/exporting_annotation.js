export default class ExportingAnnotation{
    constructor(annotation_data, canvas, VIDEO_METADATA){
        this.frame_data = annotation_data
        this.canvas = canvas
        this.metadata = VIDEO_METADATA
    }

    get_frame_json(){
        var standard_annot = []
        console.log(this.metadata)
        for(var i = 0; i < this.frame_data.length; i++){
            var curr = []
            if(this.frame_data[i] == []){
                continue;
            }
            var frame_objects = this.frame_data[i]['objects']
            if(frame_objects == undefined){
                continue;
            }
            for(var j = 0; j < frame_objects.length; j++){
                var x = (frame_objects[j]['left'] / this.canvas.width) * this.metadata['horizontal_res']
                var y = (frame_objects[j]['top'] / this.canvas.height) * this.metadata['vertical_res']
                var width = ((frame_objects[j]['width'] * frame_objects[j]['scaleX']) / this.canvas.width) * this.metadata['horizontal_res']
                var height = ((frame_objects[j]['height'] * frame_objects[j]['scaleY']) / this.canvas.height )* this.metadata['vertical_res']
                curr.push({"x": x, "y": y, "width": width, "height": height})
            }
            standard_annot.push(curr)
        }
        return standard_annot
    }

    get_frame_coco(){

    }
}