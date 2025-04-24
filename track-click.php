<?php
// Set appropriate headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Log file path
$logFile = 'click_logs.txt';

// Get the raw POST data
$rawData = file_get_contents('php://input');

// Decode the JSON data
$data = json_decode($rawData, true);

// Check if the data is valid
if ($data && isset($data['userId']) && isset($data['timestamp']) && isset($data['offer'])) {
    // Format the log entry
    $logEntry = date('Y-m-d H:i:s') . " | User ID: " . $data['userId'] . 
                " | Offer: " . $data['offer'] . 
                " | Timestamp: " . $data['timestamp'] . PHP_EOL;
    
    // Write to the log file
    file_put_contents($logFile, $logEntry, FILE_APPEND);
    
    // Return success response
    echo json_encode(['status' => 'success', 'message' => 'Click tracked successfully']);
} else {
    // Return error response
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid data']);
}
?> 