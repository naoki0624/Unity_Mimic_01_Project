var target : Transform;
var smoothTime = 1;
private var thisTransform : Transform;
private var velocity : Vector2;

function Start()
{
       thisTransform = transform;
}

function LateUpdate()
{
       thisTransform.position.x = Mathf.Lerp( thisTransform.position.x, target.position.x, Time.deltaTime * smoothTime);
       thisTransform.position.y = Mathf.Lerp( thisTransform.position.y, target.position.y, Time.deltaTime * smoothTime);
}